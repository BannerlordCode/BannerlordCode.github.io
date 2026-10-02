---
title: "Highlights"
description: "Highlights: a public class in TaleWorlds.Engine; 12 exposed members (8 methods, 2 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/Highlights.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Highlights

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public class Highlights`
**File:** `TaleWorlds.Engine/Highlights.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

Highlights lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/Highlights.cs. It is a public class; the inheritance chain is Highlights. It exposes 12 public/protected members: 8 methods, 2 properties, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Highlights lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain Highlights. The surface is method-led (methods 8/12, properties 2/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/Highlights.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Initialize` | `public static void Initialize()` | method |
| `OpenGroup` | `public static void OpenGroup(string id)` | method |
| `CloseGroup` | `public static void CloseGroup(string id, bool destroy = false)` | method |
| `SaveScreenshot` | `public static void SaveScreenshot(string highlightId, string groupId)` | method |
| `SaveVideo` | `public static void SaveVideo(string highlightId, string groupId, int startDelta, int endDelta)` | method |
| `OpenSummary` | `public static void OpenSummary(List<string>groups)` | method |
| `AddHighlight` | `public static void AddHighlight(string id, string name)` | method |
| `RemoveHighlight` | `public static void RemoveHighlight(string id)` | method |
| `Significance` | `public enum Significance` | property |
| `Type` | `public enum Type` | property |
| `Significance` | `public enum Significance` | nested type |
| `Type` | `public enum Type` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
