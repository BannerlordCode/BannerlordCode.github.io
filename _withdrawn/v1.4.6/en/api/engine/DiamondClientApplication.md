---
title: "DiamondClientApplication"
description: "DiamondClientApplication: a public class in TaleWorlds.Diamond.ClientApplication; 11 exposed members (6 methods, 3 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Diamond/ClientApplication/DiamondClientApplication.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DiamondClientApplication

**Namespace:** `TaleWorlds.Diamond.ClientApplication`
**Module:** `TaleWorlds.Diamond`
**Type:** `public class DiamondClientApplication`
**File:** `TaleWorlds.Diamond/ClientApplication/DiamondClientApplication.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## Overview

DiamondClientApplication lives in the TaleWorlds.Diamond module, source file TaleWorlds.Diamond/ClientApplication/DiamondClientApplication.cs. It is a public class; the inheritance chain is DiamondClientApplication. It exposes 11 public/protected members: 6 methods, 3 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DiamondClientApplication lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Diamond`), namespace `TaleWorlds.Diamond.ClientApplication`, inheritance chain DiamondClientApplication. The surface is method-led (methods 6/11, properties 3/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Diamond/ClientApplication/DiamondClientApplication.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ApplicationVersion` | `public ApplicationVersion ApplicationVersion` | property |
| `Parameters` | `public ParameterContainer Parameters` | property |
| `string>ProxyAddressMap` | `public IReadOnlyDictionary<string, string>ProxyAddressMap` | property |
| `DiamondClientApplication` | `public DiamondClientApplication(ApplicationVersion applicationVersion, ParameterContainer parameters)` | constructor |
| `DiamondClientApplication` | `public DiamondClientApplication(ApplicationVersion applicationVersion) : this(applicationVersion, new ParameterContainer())` | constructor |
| `GetObject` | `public object GetObject(string name)` | method |
| `AddObject` | `public void AddObject(string name, DiamondClientApplicationObject applicationObject)` | method |
| `Initialize` | `public void Initialize(ClientApplicationConfiguration applicationConfiguration)` | method |
| `CreateClientSessionProvider` | `public object CreateClientSessionProvider(string clientName, Type clientType, SessionProviderType sessionProviderType, ParameterContainer parameters)` | method |
| `GetClient` | `public T GetClient<T>(string name) where T : class, IClient` | method |
| `Update` | `public void Update()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ClientApplicationConfiguration](../ClientApplicationConfiguration/)
- [same namespace DiamondClientApplicationObject](../DiamondClientApplicationObject/)
- [same namespace GenericRestSessionProvider](../GenericRestSessionProvider__1/)
- [same namespace GenericThreadedRestSessionProvider](../GenericThreadedRestSessionProvider__1/)
