---
title: "SaveEntryFolder"
description: "SaveEntryFolder: a public class in TaleWorlds.SaveSystem; 13 exposed members (6 methods, 5 properties, 0 fields). Canonical bucket save-system. Source: TaleWorlds.SaveSystem/SaveEntryFolder.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SaveEntryFolder

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class SaveEntryFolder`
**File:** `TaleWorlds.SaveSystem/SaveEntryFolder.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## Overview

SaveEntryFolder lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/SaveEntryFolder.cs. It is a public class; the inheritance chain is SaveEntryFolder. It exposes 13 public/protected members: 6 methods, 5 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SaveEntryFolder lands in canonical bucket `save-system` (matched rule `rule:TaleWorlds.SaveSystem`), namespace `TaleWorlds.SaveSystem`, inheritance chain SaveEntryFolder. The surface is method-led (methods 6/13, properties 5/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/SaveEntryFolder.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GlobalId` | `public int GlobalId` | property |
| `ParentGlobalId` | `public int ParentGlobalId` | property |
| `FolderId` | `public FolderId FolderId` | property |
| `ChildEntries` | `public Dictionary<EntryId, SaveEntry>.ValueCollection ChildEntries` | property |
| `List` | `public List<SaveEntry>GetAllEntries()` | method |
| `CreateRootFolder` | `public static SaveEntryFolder CreateRootFolder()` | method |
| `ChildFolders` | `public Dictionary<FolderId, SaveEntryFolder>.ValueCollection ChildFolders` | property |
| `SaveEntryFolder` | `public SaveEntryFolder(SaveEntryFolder parent, int globalId, FolderId folderId, int entryCount) : this(parent.GlobalId, globalId, folderId, entryCount)` | constructor |
| `SaveEntryFolder` | `public SaveEntryFolder(int parentGlobalId, int globalId, FolderId folderId, int entryCount)` | constructor |
| `AddEntry` | `public void AddEntry(SaveEntry saveEntry)` | method |
| `GetEntry` | `public SaveEntry GetEntry(EntryId entryId)` | method |
| `AddChildFolderEntry` | `public void AddChildFolderEntry(SaveEntryFolder saveEntryFolder)` | method |
| `CreateEntry` | `public SaveEntry CreateEntry(EntryId entryId)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AsyncFileSaveDriver](../AsyncFileSaveDriver/)
- [same namespace ContainerType](../ContainerType/)
- [same namespace EntryId](../EntryId/)
- [same namespace FileDriver](../FileDriver/)
