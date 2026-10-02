---
title: "HttpHelper"
description: "HttpHelper: a public class in TaleWorlds.Library; 3 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/HttpHelper.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HttpHelper

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class HttpHelper`
**File:** `TaleWorlds.Library/HttpHelper.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

HttpHelper lives in the TaleWorlds.Library module, source file TaleWorlds.Library/HttpHelper.cs. It is a public class; the inheritance chain is HttpHelper. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HttpHelper lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain HttpHelper. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/HttpHelper.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Task` | `public static Task<string>DownloadStringTaskAsync(string url)` | method |
| `Task` | `public static Task<byte[]>DownloadDataTaskAsync(string url)` | method |
| `Task` | `public static Task<string>PostStringAsync(string url, string postData, string mediaType = " ")` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
