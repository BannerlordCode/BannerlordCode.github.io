---
title: "SandboxAutoBlockModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandboxAutoBlockModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandboxAutoBlockModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxAutoBlockModel : AutoBlockModel`
**Base:** `AutoBlockModel`
**File:** `SandBox/GameComponents/SandboxAutoBlockModel.cs`

## Overview

`SandboxAutoBlockModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SandboxAutoBlockModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetBlockDirection
`public override Agent.UsageDirection GetBlockDirection(Mission mission)`

**Purpose:** Gets the current value of `block direction`.

## Usage Example

```csharp
Game.Current.ReplaceModel<SandboxAutoBlockModel>(new MySandboxAutoBlockModel());
```

## See Also

- [Complete Class Catalog](../catalog)