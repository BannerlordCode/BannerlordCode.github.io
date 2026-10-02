---
title: "ApplicationVersion"
description: "ApplicationVersion: a public struct in TaleWorlds.Library; 24 exposed members (16 methods, 5 properties, 2 fields). Source: TaleWorlds.Library/ApplicationVersion.cs."
---
# ApplicationVersion

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct ApplicationVersion`
**File:** `TaleWorlds.Library/ApplicationVersion.cs`

## Overview

ApplicationVersion lives in the TaleWorlds.Library module, source file TaleWorlds.Library/ApplicationVersion.cs. It is a public struct; the inheritance chain is ApplicationVersion. It exposes 24 public/protected members: 16 methods, 5 properties, 2 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ApplicationVersion is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain ApplicationVersion. The surface is method-led (methods 16/24, properties 5/24), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/ApplicationVersion.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ApplicationVersionType` | `public ApplicationVersionType ApplicationVersionType` | property |
| `Major` | `public int Major` | property |
| `Minor` | `public int Minor` | property |
| `Revision` | `public int Revision` | property |
| `ChangeSet` | `public int ChangeSet` | property |
| `ApplicationVersion` | `public ApplicationVersion(ApplicationVersionType applicationVersionType, int major, int minor, int revision, int changeSet)` | constructor |
| `FromParametersFile` | `public static ApplicationVersion FromParametersFile(string customParameterFilePath = null)` | method |
| `FromString` | `public static ApplicationVersion FromString(string versionAsString, int defaultChangeSet = 0)` | method |
| `IsSame` | `public bool IsSame(ApplicationVersion other, bool checkChangeSet)` | method |
| `IsOlderThan` | `public bool IsOlderThan(ApplicationVersion other)` | method |
| `IsNewerThan` | `public bool IsNewerThan(ApplicationVersion other)` | method |
| `ApplicationVersionTypeFromString` | `public static ApplicationVersionType ApplicationVersionTypeFromString(string applicationVersionTypeAsString)` | method |
| `GetPrefix` | `public static string GetPrefix(ApplicationVersionType applicationVersionType)` | method |
| `ToString` | `public override string ToString()` | method |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `Equals` | `public override bool Equals(object obj)` | method |
| `operator>` | `public static bool operator>(ApplicationVersion a, ApplicationVersion b)` | operator |
| `operator` | `public static bool operator<(ApplicationVersion a, ApplicationVersion b)` | operator |
| `operator>=` | `public static bool operator>=(ApplicationVersion a, ApplicationVersion b)` | operator |
| `operator` | `public static bool operator<=(ApplicationVersion a, ApplicationVersion b)` | operator |
| `DefaultChangeSet` | `public const int DefaultChangeSet` | field |
| `Empty` | `public static readonly ApplicationVersion Empty` | field |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
- [same namespace ApplicationVersionType](../ApplicationVersionType)
