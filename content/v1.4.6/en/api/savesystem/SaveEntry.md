---
title: "SaveEntry"
description: "SaveEntry: a public class in TaleWorlds.SaveSystem; 7 exposed members (4 methods, 3 properties, 0 fields). Source: TaleWorlds.SaveSystem/SaveEntry.cs."
---
# SaveEntry

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class SaveEntry`
**File:** `TaleWorlds.SaveSystem/SaveEntry.cs`

## Overview

SaveEntry lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/SaveEntry.cs. It is a public class; the inheritance chain is SaveEntry. It exposes 7 public/protected members: 4 methods, 3 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SaveEntry is a top-level type in TaleWorlds.SaveSystem, namespace matching the module directory; inheritance chain SaveEntry. The surface is method-led (methods 4/7, properties 3/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/SaveEntry.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `byte[]Data` | `public byte[]Data` | property |
| `Id` | `public EntryId Id` | property |
| `FolderId` | `public int FolderId` | property |
| `CreateFrom` | `public static SaveEntry CreateFrom(int entryFolderId, EntryId entryId, byte[]data)` | method |
| `CreateNew` | `public static SaveEntry CreateNew(SaveEntryFolder parentFolder, EntryId entryId)` | method |
| `GetBinaryReader` | `public BinaryReader GetBinaryReader()` | method |
| `FillFrom` | `public void FillFrom(BinaryWriter writer)` | method |

## See Also

- [↑ savesystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AsyncFileSaveDriver](../AsyncFileSaveDriver)
- [same namespace ContainerType](../ContainerType)
- [same namespace EntryId](../EntryId)
- [same namespace FileDriver](../FileDriver)
