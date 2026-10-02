---
title: "ResourceDepot"
description: "ResourceDepot: a public class in TaleWorlds.Library; 11 exposed members (8 methods, 1 properties, 0 fields). Source: TaleWorlds.Library/ResourceDepot.cs."
---
# ResourceDepot

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class ResourceDepot`
**File:** `TaleWorlds.Library/ResourceDepot.cs`

## Overview

ResourceDepot lives in the TaleWorlds.Library module, source file TaleWorlds.Library/ResourceDepot.cs. It is a public class; the inheritance chain is ResourceDepot. It exposes 11 public/protected members: 8 methods, 1 properties, 1 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ResourceDepot is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain ResourceDepot. The surface is method-led (methods 8/11, properties 1/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/ResourceDepot.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnResourceChange;` | `public event ResourceChangeEvent OnResourceChange;` | event |
| `MBReadOnlyList` | `public MBReadOnlyList<ResourceDepotLocation>ResourceLocations` | property |
| `ResourceDepot` | `public ResourceDepot()` | constructor |
| `AddLocation` | `public void AddLocation(string basePath, string location)` | method |
| `CollectResources` | `public void CollectResources()` | method |
| `string[]GetFiles` | `public string[]GetFiles(string subDirectory, string extension, bool excludeSubContents = false)` | method |
| `GetFilePath` | `public string GetFilePath(string file)` | method |
| `IEnumerable` | `public IEnumerable<string>GetFilesEndingWith(string fileEndName)` | method |
| `StartWatchingChangesInDepot` | `public void StartWatchingChangesInDepot()` | method |
| `StopWatchingChangesInDepot` | `public void StopWatchingChangesInDepot()` | method |
| `CheckForChanges` | `public void CheckForChanges()` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
