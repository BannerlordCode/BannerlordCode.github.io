---
title: "MultiplayerLocalDataContainer<T>"
description: "MultiplayerLocalDataContainer<T>: a public class in TaleWorlds.MountAndBlade.Diamond.Lobby, inheriting MultiplayerLocalData; 11 exposed members (10 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataContainer.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerLocalDataContainer<T>

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Lobby`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public abstract class MultiplayerLocalDataContainer<T>where T : MultiplayerLocalData`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataContainer.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MultiplayerLocalDataContainer<T> lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataContainer.cs. It is a public class (abstract), implementing/inheriting MultiplayerLocalData; the inheritance chain is MultiplayerLocalDataContainer → MultiplayerLocalData. It exposes 11 public/protected members: 10 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerLocalDataContainer<T> lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond.Lobby`, inheritance chain MultiplayerLocalDataContainer → MultiplayerLocalData. The surface is method-led (methods 10/11, properties 0/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataContainer.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MultiplayerLocalDataContainer` | `public MultiplayerLocalDataContainer()` | constructor |
| `GetSaveDirectoryName` | `protected abstract string GetSaveDirectoryName();` | method |
| `GetSaveFileName` | `protected abstract string GetSaveFileName();` | method |
| `AddEntry` | `public void AddEntry(T item)` | method |
| `InsertEntry` | `public void InsertEntry(T item, int index)` | method |
| `RemoveEntry` | `public void RemoveEntry(T item)` | method |
| `MBReadOnlyList` | `public MBReadOnlyList<T>GetEntries()` | method |
| `OnBeforeAddEntry` | `protected virtual void OnBeforeAddEntry(T item, out bool canAddEntry)` | method |
| `OnBeforeRemoveEntry` | `protected virtual void OnBeforeRemoveEntry(T item, out bool canRemoveEntry)` | method |
| `GetCompatibilityFilePath` | `protected virtual PlatformFilePath GetCompatibilityFilePath()` | method |
| `List` | `protected virtual List<T>DeserializeInCompatibilityMode(string serializedJson)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MultiplayerLocalData](../MultiplayerLocalData/)
- [same namespace MultiplayerLocalData](../MultiplayerLocalData/)
- [same namespace MultiplayerLocalDataManager](../MultiplayerLocalDataManager/)
