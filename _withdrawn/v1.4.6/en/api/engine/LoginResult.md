---
title: "LoginResult"
description: "LoginResult: a public class in TaleWorlds.Diamond, inheriting FunctionResult; 11 exposed members (0 methods, 7 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Diamond/LoginResult.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LoginResult

**Namespace:** `TaleWorlds.Diamond`
**Module:** `TaleWorlds.Diamond`
**Type:** `public sealed class LoginResult : FunctionResult`
**File:** `TaleWorlds.Diamond/LoginResult.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## Overview

LoginResult lives in the TaleWorlds.Diamond module, source file TaleWorlds.Diamond/LoginResult.cs. It is a public class (sealed), implementing/inheriting FunctionResult; the inheritance chain is LoginResult → FunctionResult. It exposes 11 public/protected members: 7 properties, 4 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LoginResult lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Diamond`), namespace `TaleWorlds.Diamond`, inheritance chain LoginResult → FunctionResult. The surface is property-led (properties 7/11, methods 0/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Diamond/LoginResult.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PeerId` | `public PeerId PeerId` | property |
| `SessionKey` | `public SessionKey SessionKey` | property |
| `Successful` | `public bool Successful` | property |
| `ErrorCode` | `public string ErrorCode` | property |
| `string>ErrorParameters` | `public Dictionary<string, string>ErrorParameters` | property |
| `ProviderResponse` | `public string ProviderResponse` | property |
| `LoginResultObject` | `public LoginResultObject LoginResultObject` | property |
| `LoginResult` | `public LoginResult()` | constructor |
| `LoginResult` | `public LoginResult(PeerId peerId, SessionKey sessionKey, LoginResultObject loginResultObject)` | constructor |
| `LoginResult` | `public LoginResult(PeerId peerId, SessionKey sessionKey) : this(peerId, sessionKey, null)` | constructor |
| `LoginResult` | `public LoginResult(string errorCode, Dictionary<string, string>parameters = null)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface FunctionResult](../FunctionResult/)
- [same namespace AccessObject](../AccessObject/)
- [same namespace AccessObjectJsonConverter](../AccessObjectJsonConverter/)
- [same namespace AccessObjectResult](../AccessObjectResult/)
- [same namespace AesHelper](../AesHelper/)
