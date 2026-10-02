---
title: "ObjectLoadData"
description: "ObjectLoadData: a public class in TaleWorlds.SaveSystem; 18 exposed members (12 methods, 4 properties, 0 fields). Source: TaleWorlds.SaveSystem/Load/ObjectLoadData.cs."
---
# ObjectLoadData

**Namespace:** `TaleWorlds.SaveSystem.Load`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class ObjectLoadData`
**File:** `TaleWorlds.SaveSystem/Load/ObjectLoadData.cs`

## Overview

ObjectLoadData lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/Load/ObjectLoadData.cs. It is a public class; the inheritance chain is ObjectLoadData. It exposes 18 public/protected members: 12 methods, 4 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ObjectLoadData is a top-level type in TaleWorlds.SaveSystem, namespace differing from (TaleWorlds.SaveSystem.Load) the module directory; inheritance chain ObjectLoadData. The surface is method-led (methods 12/18, properties 4/18), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/Load/ObjectLoadData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Id` | `public int Id` | property |
| `Target` | `public object Target` | property |
| `Context` | `public LoadContext Context` | property |
| `TypeDefinition` | `public TypeDefinition TypeDefinition` | property |
| `GetDataBySaveId` | `public object GetDataBySaveId(int localSaveId)` | method |
| `GetMemberValueBySaveId` | `public object GetMemberValueBySaveId(int localSaveId, int typeLevel)` | method |
| `GetMemberValueBySaveId` | `public object GetMemberValueBySaveId(int localSaveId)` | method |
| `GetFieldValueBySaveId` | `public object GetFieldValueBySaveId(int localSaveId)` | method |
| `GetPropertyValueBySaveId` | `public object GetPropertyValueBySaveId(int localSaveId)` | method |
| `HasMember` | `public bool HasMember(int localSaveId)` | method |
| `HasMember` | `public bool HasMember(int localSaveId, int typeLevel)` | method |
| `ObjectLoadData` | `public ObjectLoadData(LoadContext context, int id)` | constructor |
| `ObjectLoadData` | `public ObjectLoadData(ObjectHeaderLoadData headerLoadData)` | constructor |
| `InitializeReaders` | `public void InitializeReaders(SaveEntryFolder saveEntryFolder)` | method |
| `CreateStruct` | `public void CreateStruct()` | method |
| `FillCreatedObject` | `public void FillCreatedObject()` | method |
| `Read` | `public void Read()` | method |
| `FillObject` | `public void FillObject()` | method |

## See Also

- [↑ savesystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ContainerHeaderLoadData](../ContainerHeaderLoadData)
- [same namespace LoadContext](../LoadContext)
- [same namespace LoadError](../LoadError)
- [same namespace LoadResult](../LoadResult)
