---
title: "ResourceDepotLocation"
description: "ResourceDepotLocation: a public class in TaleWorlds.Library; 7 exposed members (2 methods, 4 properties, 0 fields). Source: TaleWorlds.Library/ResourceDepotLocation.cs."
---
# ResourceDepotLocation

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class ResourceDepotLocation`
**File:** `TaleWorlds.Library/ResourceDepotLocation.cs`

## Overview

ResourceDepotLocation lives in the TaleWorlds.Library module, source file TaleWorlds.Library/ResourceDepotLocation.cs. It is a public class; the inheritance chain is ResourceDepotLocation. It exposes 7 public/protected members: 2 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ResourceDepotLocation is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain ResourceDepotLocation. The surface is property-led (properties 4/7, methods 2/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/ResourceDepotLocation.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BasePath` | `public string BasePath` | property |
| `Path` | `public string Path` | property |
| `FullPath` | `public string FullPath` | property |
| `Watcher` | `public FileSystemWatcher Watcher` | property |
| `ResourceDepotLocation` | `public ResourceDepotLocation(string basePath, string path, string fullPath)` | constructor |
| `StartWatchingChanges` | `public void StartWatchingChanges(FileSystemEventHandler onChangeEvent, RenamedEventHandler onRenameEvent)` | method |
| `StopWatchingChanges` | `public void StopWatchingChanges()` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
