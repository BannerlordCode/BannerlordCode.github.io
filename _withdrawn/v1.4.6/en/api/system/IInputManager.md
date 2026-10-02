---
title: "IInputManager"
description: "IInputManager: a public interface in TaleWorlds.InputSystem; 37 exposed members (37 methods, 0 properties, 0 fields). Canonical bucket system. Source: TaleWorlds.InputSystem/IInputManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IInputManager

**Namespace:** `TaleWorlds.InputSystem`
**Module:** `TaleWorlds.InputSystem`
**Type:** `public interface IInputManager`
**File:** `TaleWorlds.InputSystem/IInputManager.cs`
**Bucket:** `system` (rule:TaleWorlds.InputSystem)

## Overview

IInputManager lives in the TaleWorlds.InputSystem module, source file TaleWorlds.InputSystem/IInputManager.cs. It is a public interface; the inheritance chain is IInputManager. It exposes 37 public/protected members: 37 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IInputManager lands in canonical bucket `system` (matched rule `rule:TaleWorlds.InputSystem`), namespace `TaleWorlds.InputSystem`, inheritance chain IInputManager. The surface is method-led (methods 37/37, properties 0/37), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.InputSystem/IInputManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetMousePositionX` | `float GetMousePositionX();` | method |
| `GetMousePositionY` | `float GetMousePositionY();` | method |
| `GetMouseScrollValue` | `float GetMouseScrollValue();` | method |
| `GetControllerType` | `Input.ControllerTypes GetControllerType();` | method |
| `IsMouseActive` | `bool IsMouseActive();` | method |
| `IsControllerConnected` | `bool IsControllerConnected();` | method |
| `IsAnyTouchActive` | `bool IsAnyTouchActive();` | method |
| `PressKey` | `void PressKey(InputKey key);` | method |
| `ClearKeys` | `void ClearKeys();` | method |
| `GetVirtualKeyCode` | `int GetVirtualKeyCode(InputKey key);` | method |
| `SetClipboardText` | `void SetClipboardText(string text);` | method |
| `GetClipboardText` | `string GetClipboardText();` | method |
| `GetMouseMoveX` | `float GetMouseMoveX();` | method |
| `GetMouseMoveY` | `float GetMouseMoveY();` | method |
| `GetNormalizedMouseMoveX` | `float GetNormalizedMouseMoveX();` | method |
| `GetNormalizedMouseMoveY` | `float GetNormalizedMouseMoveY();` | method |
| `GetGyroX` | `float GetGyroX();` | method |
| `GetGyroY` | `float GetGyroY();` | method |
| `GetGyroZ` | `float GetGyroZ();` | method |
| `GetMouseSensitivity` | `float GetMouseSensitivity();` | method |
| `GetMouseDeltaZ` | `float GetMouseDeltaZ();` | method |
| `UpdateKeyData` | `void UpdateKeyData(byte[]keyData);` | method |
| `GetKeyState` | `Vec2 GetKeyState(InputKey key);` | method |
| `IsKeyPressed` | `bool IsKeyPressed(InputKey key);` | method |
| `IsKeyDown` | `bool IsKeyDown(InputKey key);` | method |
| `IsKeyDownImmediate` | `bool IsKeyDownImmediate(InputKey key);` | method |
| `IsKeyReleased` | `bool IsKeyReleased(InputKey key);` | method |
| `GetResolution` | `Vec2 GetResolution();` | method |
| `GetDesktopResolution` | `Vec2 GetDesktopResolution();` | method |
| `SetCursorPosition` | `void SetCursorPosition(int x, int y);` | method |
| `SetCursorFriction` | `void SetCursorFriction(float frictionValue);` | method |
| `InputKey[]GetClickKeys` | `InputKey[]GetClickKeys();` | method |
| `SetRumbleEffect` | `void SetRumbleEffect(float[]lowFrequencyLevels, float[]lowFrequencyDurations, int numLowFrequencyElements, float[]highFrequencyLevels, float[]highFrequencyDurations, int numHighFrequencyElements);` | method |
| `SetTriggerFeedback` | `void SetTriggerFeedback(byte leftTriggerPosition, byte leftTriggerStrength, byte rightTriggerPosition, byte rightTriggerStrength);` | method |
| `SetTriggerWeaponEffect` | `void SetTriggerWeaponEffect(byte leftStartPosition, byte leftEnd_position, byte leftStrength, byte rightStartPosition, byte rightEndPosition, byte rightStrength);` | method |
| `SetTriggerVibration` | `void SetTriggerVibration(float[]leftTriggerAmplitudes, float[]leftTriggerFrequencies, float[]leftTriggerDurations, int numLeftTriggerElements, float[]rightTriggerAmplitudes, float[]rightTriggerFrequencies, float[]rightTriggerDurations, int numRightTriggerElements);` | method |
| `SetLightbarColor` | `void SetLightbarColor(float red, float green, float blue);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EmptyInputContext](../EmptyInputContext/)
- [same namespace GameAxisKey](../GameAxisKey/)
- [same namespace GameKey](../GameKey/)
- [same namespace GameKeyContext](../GameKeyContext/)
