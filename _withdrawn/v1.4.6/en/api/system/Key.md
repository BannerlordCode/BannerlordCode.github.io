---
title: "Key"
description: "Key: a public class in TaleWorlds.InputSystem; 22 exposed members (13 methods, 6 properties, 0 fields). Canonical bucket system. Source: TaleWorlds.InputSystem/Key.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Key

**Namespace:** `TaleWorlds.InputSystem`
**Module:** `TaleWorlds.InputSystem`
**Type:** `public class Key`
**File:** `TaleWorlds.InputSystem/Key.cs`
**Bucket:** `system` (rule:TaleWorlds.InputSystem)

## Overview

Key lives in the TaleWorlds.InputSystem module, source file TaleWorlds.InputSystem/Key.cs. It is a public class; the inheritance chain is Key. It exposes 22 public/protected members: 13 methods, 6 properties, 2 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Key lands in canonical bucket `system` (matched rule `rule:TaleWorlds.InputSystem`), namespace `TaleWorlds.InputSystem`, inheritance chain Key. The surface is method-led (methods 13/22, properties 6/22), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.InputSystem/Key.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsKeyboardInput` | `public bool IsKeyboardInput` | property |
| `IsMouseButtonInput` | `public bool IsMouseButtonInput` | property |
| `IsMouseWheelInput` | `public bool IsMouseWheelInput` | property |
| `IsControllerInput` | `public bool IsControllerInput` | property |
| `InputKey` | `public InputKey InputKey` | property |
| `Key` | `public Key(InputKey key)` | constructor |
| `Key` | `public Key()` | constructor |
| `ChangeKey` | `public void ChangeKey(InputKey key)` | method |
| `ToString` | `public override string ToString()` | method |
| `Equals` | `public override bool Equals(object obj)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |
| `IsLeftAnalogInput` | `public static bool IsLeftAnalogInput(InputKey key)` | method |
| `IsLeftBumperOrTriggerInput` | `public static bool IsLeftBumperOrTriggerInput(InputKey key)` | method |
| `IsRightBumperOrTriggerInput` | `public static bool IsRightBumperOrTriggerInput(InputKey key)` | method |
| `IsFaceKeyInput` | `public static bool IsFaceKeyInput(InputKey key)` | method |
| `IsRightAnalogInput` | `public static bool IsRightAnalogInput(InputKey key)` | method |
| `IsDpadInput` | `public static bool IsDpadInput(InputKey key)` | method |
| `GetInputType` | `public static Key.InputType GetInputType(InputKey key)` | method |
| `InputType` | `public enum InputType` | property |
| `InputType` | `public enum InputType` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EmptyInputContext](../EmptyInputContext/)
- [same namespace GameAxisKey](../GameAxisKey/)
- [same namespace GameKey](../GameKey/)
- [same namespace GameKeyContext](../GameKeyContext/)
