---
title: "ITelemetryManager"
description: "ITelemetryManager: a public interface in TaleWorlds.Library; 7 exposed members (7 methods, 0 properties, 0 fields). Source: TaleWorlds.Library/ITelemetryManager.cs."
---
# ITelemetryManager

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public interface ITelemetryManager`
**File:** `TaleWorlds.Library/ITelemetryManager.cs`

## Overview

ITelemetryManager lives in the TaleWorlds.Library module, source file TaleWorlds.Library/ITelemetryManager.cs. It is a public interface; the inheritance chain is ITelemetryManager. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ITelemetryManager is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain ITelemetryManager. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/ITelemetryManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetTelemetryLevelMask` | `TelemetryLevelMask GetTelemetryLevelMask();` | method |
| `StartTelemetryConnection` | `void StartTelemetryConnection(bool showErrors);` | method |
| `StopTelemetryConnection` | `void StopTelemetryConnection();` | method |
| `BeginTelemetryScopeInternal` | `void BeginTelemetryScopeInternal(TelemetryLevelMask levelMask, string scopeName);` | method |
| `BeginTelemetryScopeBaseLevelInternal` | `void BeginTelemetryScopeBaseLevelInternal(TelemetryLevelMask levelMask, string scopeName);` | method |
| `EndTelemetryScopeInternal` | `void EndTelemetryScopeInternal();` | method |
| `EndTelemetryScopeBaseLevelInternal` | `void EndTelemetryScopeBaseLevelInternal();` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
