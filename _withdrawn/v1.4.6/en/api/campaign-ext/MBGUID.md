---
title: "MBGUID"
description: "MBGUID: a public struct in TaleWorlds.ObjectSystem, inheriting IComparable, IEquatable<MBGUID>; 17 exposed members (13 methods, 2 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.ObjectSystem/MBGUID.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBGUID

**Namespace:** `TaleWorlds.ObjectSystem`
**Module:** `TaleWorlds.ObjectSystem`
**Type:** `public struct MBGUID : IComparable, IEquatable<MBGUID>`
**File:** `TaleWorlds.ObjectSystem/MBGUID.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.ObjectSystem)

## Overview

MBGUID lives in the TaleWorlds.ObjectSystem module, source file TaleWorlds.ObjectSystem/MBGUID.cs. It is a public struct, implementing/inheriting IComparable, IEquatable<MBGUID>; the inheritance chain is MBGUID → IComparable. It exposes 17 public/protected members: 13 methods, 2 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBGUID lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.ObjectSystem`), namespace `TaleWorlds.ObjectSystem`, inheritance chain MBGUID → IComparable. The surface is method-led (methods 13/17, properties 2/17), so it mostly exposes operations. IComparable on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.ObjectSystem/MBGUID.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MBGUID` | `public MBGUID(uint id)` | constructor |
| `MBGUID` | `public MBGUID(uint objType, uint subId)` | constructor |
| `InternalValue` | `public uint InternalValue` | property |
| `SubId` | `public uint SubId` | property |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |
| `operator` | `public static bool operator<(MBGUID id1, MBGUID id2)` | operator |
| `operator>` | `public static bool operator>(MBGUID id1, MBGUID id2)` | operator |
| `operator` | `public static bool operator<=(MBGUID id1, MBGUID id2)` | operator |
| `operator>=` | `public static bool operator>=(MBGUID id1, MBGUID id2)` | operator |
| `GetHash2` | `public static long GetHash2(MBGUID id1, MBGUID id2)` | method |
| `CompareTo` | `public int CompareTo(object a)` | method |
| `GetTypeIndex` | `public uint GetTypeIndex()` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `ToString` | `public override string ToString()` | method |
| `Equals` | `public override bool Equals(object obj)` | method |
| `Equals` | `public bool Equals(MBGUID other)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace IObjectManagerHandler](../IObjectManagerHandler/)
- [same namespace MBCanNotCreatePresumedObjectException](../MBCanNotCreatePresumedObjectException/)
- [same namespace MBIllegalRegisterException](../MBIllegalRegisterException/)
- [same namespace MBInvalidReferenceException](../MBInvalidReferenceException/)
