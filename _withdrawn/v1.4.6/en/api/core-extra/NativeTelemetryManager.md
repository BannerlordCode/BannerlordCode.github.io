---
title: "NativeTelemetryManager"
description: "NativeTelemetryManager: a public class in TaleWorlds.DotNet, inheriting ITelemetryManager; 9 exposed members (7 methods, 1 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.DotNet/NativeTelemetryManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NativeTelemetryManager

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public class NativeTelemetryManager : ITelemetryManager`
**File:** `TaleWorlds.DotNet/NativeTelemetryManager.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.DotNet)

## Overview

NativeTelemetryManager lives in the TaleWorlds.DotNet module, source file TaleWorlds.DotNet/NativeTelemetryManager.cs. It is a public class, implementing/inheriting ITelemetryManager; the inheritance chain is NativeTelemetryManager → ITelemetryManager. It exposes 9 public/protected members: 7 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NativeTelemetryManager lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.DotNet`), namespace `TaleWorlds.DotNet`, inheritance chain NativeTelemetryManager → ITelemetryManager. The surface is method-led (methods 7/9, properties 1/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.DotNet/NativeTelemetryManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TelemetryLevelMask` | `public static TelemetryLevelMask TelemetryLevelMask` | property |
| `GetTelemetryLevelMask` | `public TelemetryLevelMask GetTelemetryLevelMask()` | method |
| `NativeTelemetryManager` | `public NativeTelemetryManager()` | constructor |
| `StartTelemetryConnection` | `public void StartTelemetryConnection(bool showErrors)` | method |
| `StopTelemetryConnection` | `public void StopTelemetryConnection()` | method |
| `BeginTelemetryScopeInternal` | `public void BeginTelemetryScopeInternal(TelemetryLevelMask levelMask, string scopeName)` | method |
| `EndTelemetryScopeInternal` | `public void EndTelemetryScopeInternal()` | method |
| `BeginTelemetryScopeBaseLevelInternal` | `public void BeginTelemetryScopeBaseLevelInternal(TelemetryLevelMask levelMask, string scopeName)` | method |
| `EndTelemetryScopeBaseLevelInternal` | `public void EndTelemetryScopeBaseLevelInternal()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ITelemetryManager](../ITelemetryManager/)
- [same namespace CallbackDebugTool](../CallbackDebugTool/)
- [same namespace CallbackStringBufferManager](../CallbackStringBufferManager/)
- [same namespace Controller](../Controller/)
- [same namespace CustomEngineStructMemberData](../CustomEngineStructMemberData/)
