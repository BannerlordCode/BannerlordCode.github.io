# MBCommon / Common Utilities

**Namespace**: TaleWorlds.MountAndBlade
**File**: `bannerlord-1.3.15/TaleWorlds.MountAndBlade/MBCommon.cs`
**Purpose**: Game engine common utilities

## Overview

`MBCommon` provides game engine-level common functionality including pause state management and time control.

## Properties

| Property | Type | Description |
|----------|------|-------------|
| IsPaused | bool | Whether game is paused |

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| Pause | `static void Pause()` | Pause game |
| Resume | `static void Resume()` | Resume game |

## Usage Example

```csharp
bool wasPaused = MBCommon.IsPaused;
MBCommon.Pause();
// Do something
MBCommon.Resume();
```
