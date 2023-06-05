/**
 * 이곳에 작성되는 함수의 최소 요건
 * 1. 순환 구조를 갖지 않는지
 * 2. 클래스와 결합성이 느슨한지
 * 
 * 함수의 관한 설명이 있으면 좋고 없어도 상관은 없다.
 * 파라미터 타입에 대한 정보는 기입할 것.
 * 객체, 변수를 반환하는 함수는 반환 객체, 변수의 추상화된 정보를 입력할 것.
 */

import { Dimensions, PixelRatio, Platform } from "react-native";

const {
    width: SCREEN_WIDTH,
    hiegth: SCREEN_HIEGTH,
} = Dimensions.get('window')

// based on iphone 12pro's scale
const scale = SCREEN_WIDTH / 390

/**
 * 스택 오버플로우 에서 줍줍해온 정규화 코드
 * @param {Number} size 
 * @returns {Number}
 */

export function normalizeSize(size) {
    const newSize = size * scale
    if(Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    }
    else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}