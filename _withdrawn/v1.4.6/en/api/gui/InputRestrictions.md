---
title: "InputRestrictions"
description: "InputRestrictions: a public class in TaleWorlds.ScreenSystem; 8 exposed members (3 methods, 4 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.ScreenSystem/InputRestrictions.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InputRestrictions

**Namespace:** `TaleWorlds.ScreenSystem`
**Module:** `TaleWorlds.ScreenSystem`
**Type:** `public class InputRestrictions`
**File:** `TaleWorlds.ScreenSystem/InputRestrictions.cs`
**Bucket:** `gui` (rule:TaleWorlds.ScreenSystem)

## Overview

InputRestrictions lives in the TaleWorlds.ScreenSystem module, source file TaleWorlds.ScreenSystem/InputRestrictions.cs. It is a public class; the inheritance chain is InputRestrictions. It exposes 8 public/protected members: 3 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InputRestrictions lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.ScreenSystem`), namespace `TaleWorlds.ScreenSystem`, inheritance chain InputRestrictions. The surface is property-led (properties 4/8, methods 3/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.ScreenSystem/InputRestrictions.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Order` | `public int Order` | property |
| `Id` | `public Guid Id` | property |
| `MouseVisibility` | `public bool MouseVisibility` | property |
| `InputUsageMask` | `public InputUsageMask InputUsageMask` | property |
| `InputRestrictions` | `public InputRestrictions(int order)` | constructor |
| `SetMouseVisibility` | `public void SetMouseVisibility(bool isVisible)` | method |
| `SetInputRestrictions` | `public void SetInputRestrictions(bool isMouseVisible = true, InputUsageMask mask = InputUsageMask.All)` | method |
| `ResetInputRestrictions` | `public void ResetInputRestrictions()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CursorType](../CursorType/)
- [same namespace GlobalLayer](../GlobalLayer/)
- [same namespace IScreenManagerEngineConnection](../IScreenManagerEngineConnection/)
- [same namespace ScreenComponent](../ScreenComponent/)
