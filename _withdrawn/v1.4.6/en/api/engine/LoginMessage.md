---
title: "LoginMessage"
description: "LoginMessage: a public class in TaleWorlds.Diamond, inheriting Message; 4 exposed members (0 methods, 2 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Diamond/LoginMessage.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LoginMessage

**Namespace:** `TaleWorlds.Diamond`
**Module:** `TaleWorlds.Diamond`
**Type:** `public abstract class LoginMessage : Message`
**File:** `TaleWorlds.Diamond/LoginMessage.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## Overview

LoginMessage lives in the TaleWorlds.Diamond module, source file TaleWorlds.Diamond/LoginMessage.cs. It is a public class (abstract), implementing/inheriting Message; the inheritance chain is LoginMessage → Message. It exposes 4 public/protected members: 2 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LoginMessage lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Diamond`), namespace `TaleWorlds.Diamond`, inheritance chain LoginMessage → Message. The surface is property-led (properties 2/4, methods 0/4), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Diamond/LoginMessage.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PeerId` | `public PeerId PeerId` | property |
| `AccessObject` | `public AccessObject AccessObject` | property |
| `LoginMessage` | `public LoginMessage()` | constructor |
| `LoginMessage` | `protected LoginMessage(PeerId peerId, AccessObject accessObject)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface Message](../Message/)
- [same namespace AccessObject](../AccessObject/)
- [same namespace AccessObjectJsonConverter](../AccessObjectJsonConverter/)
- [same namespace AccessObjectResult](../AccessObjectResult/)
- [same namespace AesHelper](../AesHelper/)
