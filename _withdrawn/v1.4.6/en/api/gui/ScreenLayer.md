---
title: "ScreenLayer"
description: "ScreenLayer: a public class in TaleWorlds.ScreenSystem, inheriting IComparable; 37 exposed members (21 methods, 14 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.ScreenSystem/ScreenLayer.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ScreenLayer

**Namespace:** `TaleWorlds.ScreenSystem`
**Module:** `TaleWorlds.ScreenSystem`
**Type:** `public abstract class ScreenLayer : IComparable`
**File:** `TaleWorlds.ScreenSystem/ScreenLayer.cs`
**Bucket:** `gui` (rule:TaleWorlds.ScreenSystem)

## Overview

ScreenLayer lives in the TaleWorlds.ScreenSystem module, source file TaleWorlds.ScreenSystem/ScreenLayer.cs. It is a public class (abstract), implementing/inheriting IComparable; the inheritance chain is ScreenLayer → IComparable. It exposes 37 public/protected members: 21 methods, 14 properties, 1 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ScreenLayer lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.ScreenSystem`), namespace `TaleWorlds.ScreenSystem`, inheritance chain ScreenLayer → IComparable. The surface is method-led (methods 21/37, properties 14/37), so it mostly exposes operations. IComparable on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.ScreenSystem/ScreenLayer.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Action` | `public static event Action<ScreenLayer>OnLayerActiveStateChanged;` | event |
| `Name` | `public string Name` | property |
| `Scale` | `public float Scale` | property |
| `UsableArea` | `public Vec2 UsableArea` | property |
| `Input` | `public InputContext Input` | property |
| `InputRestrictions` | `public InputRestrictions InputRestrictions` | property |
| `LastActiveState` | `public bool LastActiveState` | property |
| `IsFinalized` | `public bool IsFinalized` | property |
| `IsActive` | `public bool IsActive` | property |
| `IsHitThisFrame` | `public bool IsHitThisFrame` | property |
| `IsFocusLayer` | `public bool IsFocusLayer` | property |
| `ActiveCursor` | `public CursorType ActiveCursor` | property |
| `_usedInputs` | `protected InputType _usedInputs` | property |
| `ScreenOrderInLastFrame` | `public int ScreenOrderInLastFrame` | property |
| `ScreenLayer` | `protected ScreenLayer(string name, int localOrder)` | constructor |
| `Tick` | `protected internal virtual void Tick(float dt)` | method |
| `LateUpdate` | `protected internal virtual void LateUpdate(float dt)` | method |
| `RenderTick` | `protected internal virtual void RenderTick(float dt)` | method |
| `Update` | `protected internal virtual void Update(IReadOnlyList<int>lastKeysPressed)` | method |
| `OnActivate` | `protected virtual void OnActivate()` | method |
| `OnDeactivate` | `protected virtual void OnDeactivate()` | method |
| `OnGainFocus` | `protected internal virtual void OnGainFocus()` | method |
| `OnLoseFocus` | `protected internal virtual void OnLoseFocus()` | method |
| `OnFinalize` | `protected virtual void OnFinalize()` | method |
| `RefreshGlobalOrder` | `protected internal virtual void RefreshGlobalOrder(ref int currentOrder)` | method |
| `DrawDebugInfo` | `public virtual void DrawDebugInfo()` | method |
| `EarlyProcessEvents` | `public virtual void EarlyProcessEvents(InputType handledInputs)` | method |
| `ProcessEvents` | `public virtual void ProcessEvents()` | method |
| `HitTest` | `public virtual bool HitTest(Vector2 position)` | method |
| `HitTest` | `public virtual bool HitTest()` | method |
| `FocusTest` | `public virtual bool FocusTest()` | method |
| `InputUsageMask` | `public InputUsageMask InputUsageMask` | property |
| `IsFocusedOnInput` | `public virtual bool IsFocusedOnInput()` | method |
| `OnOnScreenKeyboardDone` | `public virtual void OnOnScreenKeyboardDone(string inputText)` | method |
| `OnOnScreenKeyboardCanceled` | `public virtual void OnOnScreenKeyboardCanceled()` | method |
| `CompareTo` | `public int CompareTo(object obj)` | method |
| `UpdateLayout` | `public virtual void UpdateLayout()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CursorType](../CursorType/)
- [same namespace GlobalLayer](../GlobalLayer/)
- [same namespace InputRestrictions](../InputRestrictions/)
- [same namespace IScreenManagerEngineConnection](../IScreenManagerEngineConnection/)
