---
title: "FolderId"
description: "FolderId: a public struct in TaleWorlds.SaveSystem, inheriting IEquatable<FolderId>; 8 exposed members (5 methods, 2 properties, 0 fields). Canonical bucket save-system. Source: TaleWorlds.SaveSystem/FolderId.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FolderId

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public struct FolderId : IEquatable<FolderId>`
**File:** `TaleWorlds.SaveSystem/FolderId.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## Overview

FolderId lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/FolderId.cs. It is a public struct, implementing/inheriting IEquatable<FolderId>; the inheritance chain is FolderId → IEquatable. It exposes 8 public/protected members: 5 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FolderId lands in canonical bucket `save-system` (matched rule `rule:TaleWorlds.SaveSystem`), namespace `TaleWorlds.SaveSystem`, inheritance chain FolderId → IEquatable. The surface is method-led (methods 5/8, properties 2/8), so it mostly exposes operations. IEquatable on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/FolderId.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `LocalId` | `public int LocalId` | property |
| `Extension` | `public SaveFolderExtension Extension` | property |
| `FolderId` | `public FolderId(int localId, SaveFolderExtension extension)` | constructor |
| `Equals` | `public override bool Equals(object obj)` | method |
| `Equals` | `public bool Equals(FolderId other)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AsyncFileSaveDriver](../AsyncFileSaveDriver/)
- [same namespace ContainerType](../ContainerType/)
- [same namespace EntryId](../EntryId/)
- [same namespace FileDriver](../FileDriver/)
