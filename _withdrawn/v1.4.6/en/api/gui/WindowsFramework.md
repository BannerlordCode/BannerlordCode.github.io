---
title: "WindowsFramework"
description: "WindowsFramework: a public class in TaleWorlds.TwoDimension.Standalone; 10 exposed members (6 methods, 3 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.TwoDimension.Standalone/WindowsFramework.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WindowsFramework

**Namespace:** `TaleWorlds.TwoDimension.Standalone`
**Module:** `TaleWorlds.TwoDimension.Standalone`
**Type:** `public class WindowsFramework`
**File:** `TaleWorlds.TwoDimension.Standalone/WindowsFramework.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## Overview

WindowsFramework lives in the TaleWorlds.TwoDimension.Standalone module, source file TaleWorlds.TwoDimension.Standalone/WindowsFramework.cs. It is a public class; the inheritance chain is WindowsFramework. It exposes 10 public/protected members: 6 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WindowsFramework lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.TwoDimension`), namespace `TaleWorlds.TwoDimension.Standalone`, inheritance chain WindowsFramework. The surface is method-led (methods 6/10, properties 3/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension.Standalone/WindowsFramework.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ThreadConfig` | `public WindowsFrameworkThreadConfig ThreadConfig` | property |
| `WindowsFramework` | `public WindowsFramework()` | constructor |
| `Initialize` | `public void Initialize(FrameworkDomain[]frameworkDomains)` | method |
| `RegisterMessageCommunicator` | `public void RegisterMessageCommunicator(IMessageCommunicator communicator)` | method |
| `UnRegisterMessageCommunicator` | `public void UnRegisterMessageCommunicator(IMessageCommunicator communicator)` | method |
| `Stop` | `public void Stop()` | method |
| `OnFinalize` | `public void OnFinalize()` | method |
| `Start` | `public void Start()` | method |
| `ElapsedTicks` | `public long ElapsedTicks` | property |
| `TicksPerSecond` | `public long TicksPerSecond` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace FrameworkDomain](../FrameworkDomain/)
- [same namespace GraphicsContext](../GraphicsContext/)
- [same namespace GraphicsForm](../GraphicsForm/)
- [same namespace IMessageCommunicator](../IMessageCommunicator/)
