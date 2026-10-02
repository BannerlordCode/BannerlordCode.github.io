---
title: "ResourceDepotLocation"
description: "ResourceDepotLocation: a public class in TaleWorlds.Library; 7 exposed members (2 methods, 4 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/ResourceDepotLocation.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ResourceDepotLocation

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class ResourceDepotLocation`
**File:** `TaleWorlds.Library/ResourceDepotLocation.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

ResourceDepotLocation lives in the TaleWorlds.Library module, source file TaleWorlds.Library/ResourceDepotLocation.cs. It is a public class; the inheritance chain is ResourceDepotLocation. It exposes 7 public/protected members: 2 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ResourceDepotLocation lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain ResourceDepotLocation. The surface is property-led (properties 4/7, methods 2/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/ResourceDepotLocation.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BasePath` | `public string BasePath` | property |
| `Path` | `public string Path` | property |
| `FullPath` | `public string FullPath` | property |
| `Watcher` | `public FileSystemWatcher Watcher` | property |
| `ResourceDepotLocation` | `public ResourceDepotLocation(string basePath, string path, string fullPath)` | constructor |
| `StartWatchingChanges` | `public void StartWatchingChanges(FileSystemEventHandler onChangeEvent, RenamedEventHandler onRenameEvent)` | method |
| `StopWatchingChanges` | `public void StopWatchingChanges()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
