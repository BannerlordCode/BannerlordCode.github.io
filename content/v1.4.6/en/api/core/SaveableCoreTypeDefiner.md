---
title: "SaveableCoreTypeDefiner"
description: "SaveableCoreTypeDefiner: a public class in TaleWorlds.Core, inheriting SaveableTypeDefiner; 10 exposed members (9 methods, 0 properties, 0 fields). Source: TaleWorlds.Core/SaveableCoreTypeDefiner.cs."
---
# SaveableCoreTypeDefiner

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class SaveableCoreTypeDefiner : SaveableTypeDefiner`
**File:** `TaleWorlds.Core/SaveableCoreTypeDefiner.cs`

## Overview

SaveableCoreTypeDefiner lives in the TaleWorlds.Core module, source file TaleWorlds.Core/SaveableCoreTypeDefiner.cs. It is a public class, implementing/inheriting SaveableTypeDefiner; the inheritance chain is SaveableCoreTypeDefiner → SaveableTypeDefiner. It exposes 10 public/protected members: 9 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SaveableCoreTypeDefiner is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain SaveableCoreTypeDefiner → SaveableTypeDefiner. The surface is method-led (methods 9/10, properties 0/10), so it mostly exposes operations. SaveableTypeDefiner on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/SaveableCoreTypeDefiner.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SaveableCoreTypeDefiner` | `public SaveableCoreTypeDefiner() : base(10000)` | constructor |
| `DefineClassTypes` | `protected override void DefineClassTypes()` | method |
| `DefineStructTypes` | `protected override void DefineStructTypes()` | method |
| `DefineEnumTypes` | `protected override void DefineEnumTypes()` | method |
| `DefineInterfaceTypes` | `protected override void DefineInterfaceTypes()` | method |
| `DefineConflictResolvers` | `protected override void DefineConflictResolvers()` | method |
| `DefineRootClassTypes` | `protected override void DefineRootClassTypes()` | method |
| `DefineGenericClassDefinitions` | `protected override void DefineGenericClassDefinitions()` | method |
| `DefineGenericStructDefinitions` | `protected override void DefineGenericStructDefinitions()` | method |
| `DefineContainerDefinitions` | `protected override void DefineContainerDefinitions()` | method |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
