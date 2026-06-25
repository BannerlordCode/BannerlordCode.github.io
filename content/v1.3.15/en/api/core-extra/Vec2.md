---
title: "Vec2"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Vec2 / 2D Vector`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Vec2 / 2D Vector

**Namespace**: TaleWorlds.Library
**File**: `bannerlord-1.3.15/TaleWorlds.Library/Vec2.cs`
**Purpose**: 2D vector math library

## Overview

`Vec2` is a 2D vector struct for positions, directions, and scaling in 2D game development.

## Mental Model

Treat `Vec2` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Properties

| Property | Type | Description |
|----------|------|-------------|
| X | float | X component |
| Y | float | Y component |
| Zero | Vec2 | Zero vector |

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| Distance | `float Distance(Vec2 v)` | Calculate distance |
| Normalize | `Vec2 Normalize()` | Normalize |

## Usage Example

```csharp
Vec2 position = new Vec2(100f, 50f);
```
