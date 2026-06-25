---
title: "EpicPlatformServices"
description: "Auto-generated class reference for EpicPlatformServices."
---
# EpicPlatformServices

**Namespace:** TaleWorlds.PlatformService.Epic
**Module:** TaleWorlds.PlatformService
**Type:** `public class EpicPlatformServices : IPlatformServices`
**Base:** `IPlatformServices`
**File:** `bin/TaleWorlds.PlatformService.Epic/TaleWorlds.PlatformService.Epic/EpicPlatformServices.cs`

## Overview

`EpicPlatformServices` lives in `TaleWorlds.PlatformService.Epic` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService.Epic` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `Value` | `public int Value { get; set; }` |
| `ErrorCode` | `public string ErrorCode { get; set; }` |
| `ErrorMessage` | `public string ErrorMessage { get; set; }` |
| `NumericErrorCode` | `public int NumericErrorCode { get; set; }` |
| `ErrorDescription` | `public string ErrorDescription { get; set; }` |
| `Error` | `public string Error { get; set; }` |
| `AccessToken` | `public string AccessToken { get; set; }` |
| `ExpiresIn` | `public int ExpiresIn { get; set; }` |
| `ExpiresAt` | `public DateTime ExpiresAt { get; set; }` |
| `TokenType` | `public string TokenType { get; set; }` |
| `RefreshToken` | `public string RefreshToken { get; set; }` |
| `RefreshExpires` | `public int RefreshExpires { get; set; }` |
| `RefreshExpiresAt` | `public DateTime RefreshExpiresAt { get; set; }` |
| `AccountId` | `public string AccountId { get; set; }` |
| `ClientId` | `public string ClientId { get; set; }` |
| `InternalClient` | `public bool InternalClient { get; set; }` |
| `ClientService` | `public string ClientService { get; set; }` |
| `DisplayName` | `public string DisplayName { get; set; }` |
| `App` | `public string App { get; set; }` |
| `InAppId` | `public string InAppId { get; set; }` |
| `DeviceId` | `public string DeviceId { get; set; }` |
| `ProductId` | `public string ProductId { get; set; }` |
| `UserId` | `public string UserId { get; }` |

## Key Methods

### Initialize
`public bool Initialize(IFriendListService additionalFriendListServices)`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of EpicPlatformServices from the subsystem API first
EpicPlatformServices epicPlatformServices = ...;
var result = epicPlatformServices.Initialize(additionalFriendListServices);
```

### Terminate
`public void Terminate()`

**Purpose:** Executes the Terminate logic.

```csharp
// Obtain an instance of EpicPlatformServices from the subsystem API first
EpicPlatformServices epicPlatformServices = ...;
epicPlatformServices.Terminate();
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of EpicPlatformServices from the subsystem API first
EpicPlatformServices epicPlatformServices = ...;
epicPlatformServices.Tick(0);
```

### QueryDefinitions
`public void QueryDefinitions()`

**Purpose:** Executes the QueryDefinitions logic.

```csharp
// Obtain an instance of EpicPlatformServices from the subsystem API first
EpicPlatformServices epicPlatformServices = ...;
epicPlatformServices.QueryDefinitions();
```

### ShowGamepadTextInput
`public bool ShowGamepadTextInput(string descriptionText, string existingText, uint maxChars, bool isObfuscated)`

**Purpose:** Displays the UI or element associated with gamepad text input.

```csharp
// Obtain an instance of EpicPlatformServices from the subsystem API first
EpicPlatformServices epicPlatformServices = ...;
var result = epicPlatformServices.ShowGamepadTextInput("example", "example", 0, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EpicPlatformServices epicPlatformServices = ...;
epicPlatformServices.Initialize(additionalFriendListServices);
```

## See Also

- [Area Index](../)