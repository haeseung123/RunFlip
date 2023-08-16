import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveJsonData(key, json) {
    let result = 'done'
    try {
        const toString = JSON.stringify(json)
        await AsyncStorage.setItem(key, toString, e => {
            if(e) {
                result = 'failed'
                return {result, message: '로그인에 실패 했습니다.'}
            }
        })
        return {result}
    } 
    catch (e) {
        result = 'unexpected error'
        return {result, message: '알 수 없는 이유로 실패 했습니다\n몇번의 재시도에도 이 문구가 계속 나온다면 개발팀에 문의 해주세요'}
    }
}

export async function getJsonData(key) {
    let result = 'done'
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        if(jsonValue!==null) {
            return {value: JSON.parse(jsonValue), result}
        }
        else {
            result = 'failed'
            return {value: {}, result, message: '사용자 정보를 불러오는데 실패 했습니다'}
        }
    }
    catch(e) {
        result = 'unexpected error'
        return {value: {}, result, message: '알 수 없는 이유로 사용자 정보를 불러오는데 실패 했습니다'}
    }
}

export async function saveRecordData(key, json) {
    let result = 'done'
    console.log('key',key)
    try {
        const existingData = await AsyncStorage.getItem('record')
        // const parsedData = JSON.parse(existingData) || {}
        // const currentDateData= parsedData[json.currentDate] || []
       
        let parsedData;

        if (existingData) {
        parsedData = JSON.parse(existingData);
        } 
        else {
        parsedData = {};
        }

        const currentDateData = parsedData[json.currentDate];

        if (Array.isArray(currentDateData)) {
            currentDateData.push(json.data)
        } 
        else {
            parsedData[json.currentDate] = [json.data]
        }

        await AsyncStorage.setItem('record', JSON.stringify(parsedData))
        console.log('data',parsedData)
        return result

    }
    catch (e) {
        result = 'unexpected error'
        return { result, mesaage: '알 수 없는 이유로 저장에 실패 했습니다.'}
    }
}