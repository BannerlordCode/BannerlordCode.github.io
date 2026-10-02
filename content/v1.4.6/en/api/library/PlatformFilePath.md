---
title: "PlatformFilePath"
description: "PlatformFilePath: a public struct in TaleWorlds.Library; 5 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.Library/PlatformFilePath.cs."
---
# PlatformFilePath

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct PlatformFilePath`
**File:** `TaleWorlds.Library/PlatformFilePath.cs`

## Overview

PlatformFilePath lives in the TaleWorlds.Library module, source file TaleWorlds.Library/PlatformFilePath.cs. It is a public struct; the inheritance chain is PlatformFilePath. It exposes 5 public/protected members: 3 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PlatformFilePath is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain PlatformFilePath. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/PlatformFilePath.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlatformFilePath` | `public PlatformFilePath(PlatformDirectoryPath folderPath, string fileName)` | constructor |
| `+` | `public static PlatformFilePath operator +(PlatformFilePath path, string str)` | operator |
| `FileFullPath` | `public string FileFullPath` | property |
| `GetFileNameWithoutExtension` | `public string GetFileNameWithoutExtension()` | method |
| `ToString` | `public override string ToString()` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
