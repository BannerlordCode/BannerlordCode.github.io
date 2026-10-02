---
title: "MBSortedMultiList"
description: "MBSortedMultiList — class in TaleWorlds.Library. 31 public members (0 static)."
---

<!-- v147-skeleton -->
# MBSortedMultiList

**Namespace:** `TaleWorlds.Library`  
**Module:** `TaleWorlds.Library`  
**Type:** `public class MBSortedMultiList<TKey, TValue> : IReadOnlyList<TValue>, IEnumerable<TValue>, IEnumerable, IReadOnlyCollection<TValue>, IMBCollection where TKey : IComparable<TKey>`  
**Base:** `IReadOnlyList`  
**Source:** `TaleWorlds.Library/MBSortedMultiList.cs`

## Overview

`MBSortedMultiList` is a named type in the TaleWorlds.Library namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends IReadOnlyList, so the members it does not redeclare are inherited from there. 4 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MBSortedMultiList`.
- **Instance members** (30): `Count`, `FirstValue`, `LastValue`, `Contains`, `Contains`, `Get`, ….
- **Extension points** (1): `ToString`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ToString` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. |
| `Add` | method | Instance entry point. Takes 2 arguments: `TKey key`, `TValue value`. |
| `AddRange` | method | Instance entry point. Takes 2 arguments: `IEnumerable<KeyValuePair<TKey`, `TValue>> items`. Adds to the collection or relation this type owns. |
| `All` | method | Instance entry point. Takes 2 arguments: `Predicate<KeyValuePair<TKey`, `TValue>> predicate`. Returns `bool`. |
| `Any` | method | Instance entry point. Takes 2 arguments: `Predicate<KeyValuePair<TKey`, `TValue>> predicate`. Returns `bool`. |
| `Clear` | method | Instance entry point. Takes no arguments. |
| `ComparerType` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `Contains` | method | Instance entry point. Takes 1 argument: `TKey key`. Returns `bool`. |
| `Contains` | method | Instance entry point. Takes 2 arguments: `TKey key`, `TValue value`. Returns `bool`. |
| `Count` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `Find` | method | Instance entry point. Takes 5 arguments: `Predicate<KeyValuePair<TKey`, `TValue>> predicate`, `out KeyValuePair<TKey`, `TValue> found`, …. Returns `bool`. |
| `FindAll` | method | Instance entry point. Takes 2 arguments: `Predicate<KeyValuePair<TKey`, `TValue>> predicate`. Returns `MBList<KeyValuePair<TKey, TValue>>`. Read path: prefer it over reaching for the backing store. |
| `FindIndex` | method | Instance entry point. Takes 3 arguments: `Predicate<KeyValuePair<TKey`, `TValue>> predicate`, `bool searchForward`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `FirstIndexOf` | method | Instance entry point. Takes 1 argument: `TKey key`. Returns `int`. |
| `FirstIndexOf` | method | Instance entry point. Takes 2 arguments: `TKey key`, `TValue value`. Returns `int`. |
| `FirstValue` | property | Instance entry point `TValue` property. Read it for current state; a declared setter writes that state in place. |
| `Get` | method | Instance entry point. Takes 1 argument: `int index`. Returns `KeyValuePair<TKey, TValue>`. |
| `GetEnumerator` | method | Instance entry point. Takes no arguments. Returns `IEnumerator<TValue>`. Read path: prefer it over reaching for the backing store. |
| `GetValues` | method | Instance entry point. Takes 1 argument: `TKey key`. Returns `IEnumerator<TValue>`. Read path: prefer it over reaching for the backing store. |
| `LastIndexOf` | method | Instance entry point. Takes 1 argument: `TKey key`. Returns `int`. |
| `LastIndexOf` | method | Instance entry point. Takes 2 arguments: `TKey key`, `TValue value`. Returns `int`. |
| `LastValue` | property | Instance entry point `TValue` property. Read it for current state; a declared setter writes that state in place. |
| `Remove` | method | Instance entry point. Takes 2 arguments: `TKey key`, `TValue value`. Returns `bool`. |
| `Remove` | method | Instance entry point. Takes 1 argument: `TKey key`. Returns `bool`. |

- Constructed as `public MBSortedMultiList(IComparer<TKey> customComparer)`.

7 further public members follow the same patterns.
## Usage Example

```csharp
var mBSortedMultiList = new MBSortedMultiList(customComparer);
mBSortedMultiList.Contains(key);
// Read current state through mBSortedMultiList.Count.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.Library/MBSortedMultiList.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/core-extra/](../) — the other types in this bucket.
