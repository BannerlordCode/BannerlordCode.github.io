---
title: "ManagedScriptComponent"
description: "ManagedScriptComponent: a public class in TaleWorlds.Engine, inheriting ScriptComponent; 3 exposed members (2 methods, 1 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/ManagedScriptComponent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ManagedScriptComponent

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class ManagedScriptComponent : ScriptComponent`
**File:** `TaleWorlds.Engine/ManagedScriptComponent.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

ManagedScriptComponent lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/ManagedScriptComponent.cs. It is a public class (sealed), implementing/inheriting ScriptComponent; the inheritance chain is ManagedScriptComponent → ScriptComponent → NativeObject. It exposes 3 public/protected members: 2 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ManagedScriptComponent lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain ManagedScriptComponent → ScriptComponent → NativeObject. The surface is method-led (methods 2/3, properties 1/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/ManagedScriptComponent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ScriptComponentBehavior` | `public ScriptComponentBehavior ScriptComponentBehavior` | property |
| `SetVariableEditorWidgetStatus` | `public void SetVariableEditorWidgetStatus(string field, bool enabled)` | method |
| `SetVariableEditorWidgetValue` | `public void SetVariableEditorWidgetValue(string field, RglScriptFieldType fieldType, double value)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScriptComponent](../ScriptComponent/)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
