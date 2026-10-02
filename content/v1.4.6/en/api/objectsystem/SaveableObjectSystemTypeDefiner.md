---
title: "SaveableObjectSystemTypeDefiner"
description: "SaveableObjectSystemTypeDefiner: a public class in TaleWorlds.ObjectSystem, inheriting SaveableTypeDefiner; 10 exposed members (9 methods, 0 properties, 0 fields). Source: TaleWorlds.ObjectSystem/SaveableObjectSystemTypeDefiner.cs."
---
# SaveableObjectSystemTypeDefiner

**Namespace:** `TaleWorlds.ObjectSystem`
**Module:** `TaleWorlds.ObjectSystem`
**Type:** `public class SaveableObjectSystemTypeDefiner : SaveableTypeDefiner`
**File:** `TaleWorlds.ObjectSystem/SaveableObjectSystemTypeDefiner.cs`

## Overview

SaveableObjectSystemTypeDefiner lives in the TaleWorlds.ObjectSystem module, source file TaleWorlds.ObjectSystem/SaveableObjectSystemTypeDefiner.cs. It is a public class, implementing/inheriting SaveableTypeDefiner; the inheritance chain is SaveableObjectSystemTypeDefiner → SaveableTypeDefiner. It exposes 10 public/protected members: 9 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SaveableObjectSystemTypeDefiner is a top-level type in TaleWorlds.ObjectSystem, namespace matching the module directory; inheritance chain SaveableObjectSystemTypeDefiner → SaveableTypeDefiner. The surface is method-led (methods 9/10, properties 0/10), so it mostly exposes operations. SaveableTypeDefiner on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.ObjectSystem/SaveableObjectSystemTypeDefiner.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SaveableObjectSystemTypeDefiner` | `public SaveableObjectSystemTypeDefiner() : base(10000)` | constructor |
| `DefineBasicTypes` | `protected override void DefineBasicTypes()` | method |
| `DefineClassTypes` | `protected override void DefineClassTypes()` | method |
| `DefineStructTypes` | `protected override void DefineStructTypes()` | method |
| `DefineEnumTypes` | `protected override void DefineEnumTypes()` | method |
| `DefineInterfaceTypes` | `protected override void DefineInterfaceTypes()` | method |
| `DefineRootClassTypes` | `protected override void DefineRootClassTypes()` | method |
| `DefineGenericClassDefinitions` | `protected override void DefineGenericClassDefinitions()` | method |
| `DefineGenericStructDefinitions` | `protected override void DefineGenericStructDefinitions()` | method |
| `DefineContainerDefinitions` | `protected override void DefineContainerDefinitions()` | method |

## See Also

- [↑ objectsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace IObjectManagerHandler](../IObjectManagerHandler)
- [same namespace MBCanNotCreatePresumedObjectException](../MBCanNotCreatePresumedObjectException)
- [same namespace MBGUID](../MBGUID)
- [same namespace MBIllegalRegisterException](../MBIllegalRegisterException)
