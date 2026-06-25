---
title: "NativeObject"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NativeObject`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NativeObject

**Namespace**: TaleWorlds.DotNet
**File**: `bannerlord-1.3.15/TaleWorlds.DotNet/NativeObject.cs`
**Purpose**: Base class for native object wrappers / 原生对象包装基类

## Overview

`NativeObject` is the base class for all native object wrapper classes in the Bannerlord engine. It encapsulates a `UIntPtr Pointer` to native C++ objects and manages the lifecycle through reference counting.

## Mental Model

Treat `NativeObject` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Key Features

- Encapsulates native object pointer via `UIntPtr Pointer`
- Automatic reference counting via `Construct` and destructor
- Manual invalidation via `ManualInvalidate`
- Static type registration system for native types
- Operator overloads for equality comparison

## Core Methods

- `Construct(UIntPtr pointer)`: Initialize and increase reference count
- `ManualInvalidate()`: Manually release reference
- `CreateNativeObjectWrapper`: Create wrapper from native pointer

## Usage

```csharp
Skeleton skeleton = Skeleton.CreateFromModel("human_skeleton");
if (skeleton.IsValid)
{
    // Use skeleton...
}
skeleton.ManualInvalidate();
```

## Notes

- Abstract base class - cannot be instantiated directly
- All wrapper classes inherit from it
- Reference counting managed by native side

## Usage Example

```csharp
var example = new NativeObject();
```
