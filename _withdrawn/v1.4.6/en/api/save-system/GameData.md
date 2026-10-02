---
title: "GameData"
description: "GameData: a public class in TaleWorlds.SaveSystem; 13 exposed members (6 methods, 5 properties, 0 fields). Canonical bucket save-system. Source: TaleWorlds.SaveSystem/GameData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameData

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class GameData`
**File:** `TaleWorlds.SaveSystem/GameData.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## Overview

GameData lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/GameData.cs. It is a public class; the inheritance chain is GameData. It exposes 13 public/protected members: 6 methods, 5 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameData lands in canonical bucket `save-system` (matched rule `rule:TaleWorlds.SaveSystem`), namespace `TaleWorlds.SaveSystem`, inheritance chain GameData. The surface is method-led (methods 6/13, properties 5/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/GameData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `byte[]Header` | `public byte[]Header` | property |
| `byte[]Strings` | `public byte[]Strings` | property |
| `byte[][]ObjectData` | `public byte[][]ObjectData` | property |
| `byte[][]ContainerData` | `public byte[][]ContainerData` | property |
| `TotalSize` | `public int TotalSize` | property |
| `GameData` | `public GameData(byte[]header, byte[]strings, byte[][]objectData, byte[][]containerData)` | constructor |
| `GameData` | `public GameData()` | constructor |
| `Inspect` | `public void Inspect()` | method |
| `CreateFrom` | `public static GameData CreateFrom(byte[]readBytes)` | method |
| `byte[]GetData` | `public byte[]GetData()` | method |
| `Write` | `public static void Write(BinaryWriter writer, GameData gameData)` | method |
| `Read` | `public static GameData Read(BinaryReader reader)` | method |
| `IsEqualTo` | `public bool IsEqualTo(GameData gameData)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AsyncFileSaveDriver](../AsyncFileSaveDriver/)
- [same namespace ContainerType](../ContainerType/)
- [same namespace EntryId](../EntryId/)
- [same namespace FileDriver](../FileDriver/)
