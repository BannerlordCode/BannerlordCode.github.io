---
title: "ServiceException"
description: "ServiceException: a public class in TaleWorlds.Network, inheriting Exception; 3 exposed members (0 methods, 2 properties, 0 fields). Canonical bucket network. Source: TaleWorlds.Network/ServiceException.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ServiceException

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public class ServiceException : Exception`
**File:** `TaleWorlds.Network/ServiceException.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## Overview

ServiceException lives in the TaleWorlds.Network module, source file TaleWorlds.Network/ServiceException.cs. It is a public class, implementing/inheriting Exception; the inheritance chain is ServiceException → Exception. It exposes 3 public/protected members: 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ServiceException lands in canonical bucket `network` (matched rule `rule:TaleWorlds.Network`), namespace `TaleWorlds.Network`, inheritance chain ServiceException → Exception. The surface is property-led (properties 2/3, methods 0/3), so it mostly exposes state for reading. Exception on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Network/ServiceException.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ServiceException` | `public ServiceException(string type, string message) : base(" ")` | constructor |
| `ExceptionMessage` | `public string ExceptionMessage` | property |
| `ExceptionType` | `public string ExceptionType` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Authorize](../Authorize/)
- [same namespace ClientsideSession](../ClientsideSession/)
- [same namespace ClientWebSocketHandler](../ClientWebSocketHandler/)
- [same namespace ConnectionState](../ConnectionState/)
