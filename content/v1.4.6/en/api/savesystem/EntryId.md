---
title: "EntryId"
description: "EntryId: a public struct in TaleWorlds.SaveSystem, inheriting IEquatable<EntryId>; 8 exposed members (5 methods, 2 properties, 0 fields). Source: TaleWorlds.SaveSystem/EntryId.cs."
---
# EntryId

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public struct EntryId : IEquatable<EntryId>`
**File:** `TaleWorlds.SaveSystem/EntryId.cs`

## Overview

EntryId lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/EntryId.cs. It is a public struct, implementing/inheriting IEquatable<EntryId>; the inheritance chain is EntryId → IEquatable. It exposes 8 public/protected members: 5 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EntryId is a top-level type in TaleWorlds.SaveSystem, namespace matching the module directory; inheritance chain EntryId → IEquatable. The surface is method-led (methods 5/8, properties 2/8), so it mostly exposes operations. IEquatable on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/EntryId.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Id` | `public int Id` | property |
| `Extension` | `public SaveEntryExtension Extension` | property |
| `EntryId` | `public EntryId(int id, SaveEntryExtension extension)` | constructor |
| `Equals` | `public override bool Equals(object obj)` | method |
| `Equals` | `public bool Equals(EntryId other)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |

## See Also

- [↑ savesystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AsyncFileSaveDriver](../AsyncFileSaveDriver)
- [same namespace ContainerType](../ContainerType)
- [same namespace FileDriver](../FileDriver)
- [same namespace FolderId](../FolderId)
