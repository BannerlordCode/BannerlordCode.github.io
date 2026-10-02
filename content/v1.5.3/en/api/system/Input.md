---
title: "Input"
description: "Auto-generated class reference for Input."
---
# Input

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public static class Input `
**Base:** System.Object
**Source:** TaleWorlds.InputSystem/Input.cs

## Overview

Auto-generated stub for `Input`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### IsPlaystation
`public static bool IsPlaystation(this Input.ControllerTypes controllerType)`

### Initialize
`public static void Initialize(IInputManager inputManager,IInputContext debugInput)`

### UpdateKeyData
`public static void UpdateKeyData(byte[] keyData)`

### GetMouseMoveX
`public static float GetMouseMoveX()`

### GetMouseMoveY
`public static float GetMouseMoveY()`

### GetNormalizedMouseMoveX
`public static float GetNormalizedMouseMoveX()`

### GetNormalizedMouseMoveY
`public static float GetNormalizedMouseMoveY()`

### GetGyroX
`public static float GetGyroX()`

### GetGyroY
`public static float GetGyroY()`

### GetGyroZ
`public static float GetGyroZ()`

### GetKeyState
`public static Vec2 GetKeyState(InputKey key)`

### IsKeyPressed
`public static bool IsKeyPressed(InputKey key)`

### IsKeyDown
`public static bool IsKeyDown(InputKey key)`

### IsKeyDownImmediate
`public static bool IsKeyDownImmediate(InputKey key)`

### IsKeyReleased
`public static bool IsKeyReleased(InputKey key)`

### IsControlOrShiftNotDown
`public static bool IsControlOrShiftNotDown()`

### GetPrimaryControllerType
`public static Input.ControllerTypes GetPrimaryControllerType()`

### GetFirstKeyPressedInRange
`public static int GetFirstKeyPressedInRange(int startKeyNo)`

### GetFirstKeyDownInRange
`public static int GetFirstKeyDownInRange(int startKeyNo)`

### GetFirstKeyReleasedInRange
`public static int GetFirstKeyReleasedInRange(int startKeyNo)`

### PressKey
`public static void PressKey(InputKey key)`

### ClearKeys
`public static void ClearKeys()`

### GetVirtualKeyCode
`public static int GetVirtualKeyCode(InputKey key)`

### IsDown
`public static bool IsDown(this InputKey key)`

### IsPressed
`public static bool IsPressed(this InputKey key)`

### IsReleased
`public static bool IsReleased(this InputKey key)`

### SetClipboardText
`public static void SetClipboardText(string text)`

### GetClipboardText
`public static string GetClipboardText()`

### Update
`public static void Update()`

### IsControllerKey
`public static bool IsControllerKey(InputKey key)`

### SetMousePosition
`public static void SetMousePosition(int x,int y)`

### SetCursorFriction
`public static void SetCursorFriction(float frictionValue)`

### GetClickKeys
`public static InputKey[] GetClickKeys()`

### SetRumbleEffect
`public static void SetRumbleEffect(float[] lowFrequencyLevels,float[] lowFrequencyDurations,int numLowFrequencyElements,float[] highFrequencyLevels,float[] highFrequencyDurations,int numHighFrequencyElements)`

### SetTriggerFeedback
`public static void SetTriggerFeedback(byte leftTriggerPosition,byte leftTriggerStrength,byte rightTriggerPosition,byte rightTriggerStrength)`

### SetTriggerWeaponEffect
`public static void SetTriggerWeaponEffect(byte leftStartPosition,byte leftEnd_position,byte leftStrength,byte rightStartPosition,byte rightEndPosition,byte rightStrength)`

### SetTriggerVibration
`public static void SetTriggerVibration(float[] leftTriggerAmplitudes,float[] leftTriggerFrequencies,float[] leftTriggerDurations,int numLeftTriggerElements,float[] rightTriggerAmplitudes,float[] rightTriggerFrequencies,float[] rightTriggerDurations,int numRightTriggerElements)`

### SetLightbarColor
`public static void SetLightbarColor(float red,float green,float blue)`

## See Also

- [Section index](../)
