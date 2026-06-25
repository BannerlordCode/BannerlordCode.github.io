---
title: v1.4.5 Architecture
description: Module structure and developer entry points for Bannerlord v1.4.5
---
# v1.4.5 Architecture

## Mental Model

Treat `v1.4.5 Architecture` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

The key change in this version is not only API churn, but that the **source structure becomes visible again**: `SandBox`, `StoryMode`, `Multiplayer`, and `CustomBattle` are back as readable source modules. That means the recommended reading path starts from module boundaries, not only from DLL names.

## Entry Tree

- [🏠 v1.4.5 Home](../)
- [🗂️ API Index](../api/)
- [📋 Complete Class Catalog](../api/)
- [🔀 Cross-Version Compare](../../../versions/)
- [⭐ Canonical v1.3.15 SDK Overview](../../../v1.3.15/en/architecture/sdk-overview)

## Module Mental Model

- `Modules.SandBox` / `Modules.StoryMode`: the main entry points for campaign and gameplay logic.
- `Modules.Multiplayer` / `Modules.CustomBattle`: mode-specific logic, often paired with dedicated View / VM / UI layers.
- `Modules.Native`: the bridge layer for GauntletUI, View, and Platform.PC concerns.
- `bin/`: still the source of core `TaleWorlds.*` assemblies, but best read alongside the source modules.

## Suggested Reading Order

1. Start here and at the [v1.4.5 home page](../) to place the modules.
2. Enter the [API index](../api/) to choose the subsystem you care about.
3. Use class-page breadcrumbs to move back to the area, API, and version roots.
4. Use [cross-version compare](../../../versions/) only when you need migration guidance.

<!-- BEGIN SECTION INDEX -->

## Parent Navigation

- [Version Home](../)

## Child Pages

_No child pages yet._

<!-- END SECTION INDEX -->
