---
title: Utilities
description: TaleWorlds.Native.dll utility functions and helper classes reference
---
# Utilities

## Mental Model

Treat `Utilities` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

The utilities module contains helper functions for string processing, math operations, logging system, etc.

## Overview

This module collects the low-level building blocks used across the engine: string types (`rglString_base` and variants), math value types (`Vec2`/`Vec3`/`Mat3`/`Vec4`/`rotator`), C++ exception classes, the MSVC regex node hierarchy, RTTI support, and producer/consumer primitives. Most mod code never calls these directly — they appear in crash logs, decompiled traces, and interop signatures.

## String

### rglString_base

String base class.

```cpp
rglString_base::vftable
```

### rglVarString

Variable-length string.

```cpp
rglVarString::vftable
```

### rglConstString

Constant string template class.

```cpp
rglConstString<N>::vftable
// N can be 16, 32, 64, 128, 1024, etc.
```

## Math

### Vec2

Two-dimensional vector.

### Vec3

Three-dimensional vector.

### Mat3

3x3 matrix.

### Vec4

Four-dimensional vector.

### rotator

Rotation representation.

## Exception Handling

### exception

Exception base class.

```cpp
exception::vftable
```

### bad_alloc

Memory allocation failure.

```cpp
bad_alloc::vftable
```

### bad_cast

Type cast failure.

```cpp
bad_cast::vftable
```

### bad_array_new_length

Invalid array length.

```cpp
bad_array_new_length::vftable
```

### domain_error

Domain error.

```cpp
domain_error::vftable
```

### logic_error

Logic error.

```cpp
logic_error::vftable
```

### _com_error

COM error.

```cpp
_com_error::vftable
```

## Regex

### _Node_base

Regex node base class.

```cpp
_Node_base::vftable
```

### _Node_assert

Assertion node.

```cpp
_Node_assert::vftable
```

### _Node_back

Backtracking node.

```cpp
_Node_back::vftable
```

### _Node_base

Base node.

```cpp
_Node_base::vftable
```

### _Node_capture

Capture node.

```cpp
_Node_capture::vftable
```

### _Node_end_group

End group node.

```cpp
_Node_end_group::vftable
```

### _Node_end_rep

End repetition node.

```cpp
_Node_end_rep::vftable
```

### _Node_endif

Conditional end node.

```cpp
_Node_endif::vftable
```

### _Node_if

Conditional node.

```cpp
_Node_if::vftable
```

### _Node_rep

Repetition node.

```cpp
_Node_rep::vftable
```

### _Root_node

Root node.

```cpp
_Root_node::vftable
```

## Type Info

### type_info

Type information.

```cpp
type_info::vftable
```

### filter

Filter.

```cpp
filter::vftable
```

## Producer/Consumer

### ProducerBase

Producer base class.

```cpp
ProducerBase::vftable
```

### ImplicitProducer

Implicit producer.

```cpp
ImplicitProducer::vftable
```

### ExplicitProducer

Explicit producer.

```cpp
ExplicitProducer::vftable
```

### ftlObject

FTL object.

```cpp
ftlObject::vftable
```

## Other Utility Classes

### box

Box.

```cpp
box::vftable
```

### rotator

Rotator.

```cpp
rotator::vftable
```

### Edit_data

Edit data.

```cpp
Edit_data::vftable
```

## Task Callbacks

### IResourceCallbacks

Resource callback interface.

```cpp
IResourceCallbacks::vftable
```

### IReadingCallbacks

Reading callback interface.

```cpp
IReadingCallbacks::vftable
```

## Memory Management

### rglMemory_allocator_base

Memory allocator base class.

```cpp
rglMemory_allocator_base::vftable
```

## Configuration

### rglConfig

Configuration.

```cpp
rglConfig::vftable
```

### rglDev_config

Developer configuration.

```cpp
rglDev_config::vftable
```

### rglUser_config

User configuration.

```cpp
rglUser_config::vftable
```

## Usage Example

```csharp
// Example: utility types appear mainly in decompiled traces and crash logs.
// When you see rglString_base or ftlObject in a stack trace, you are looking
// at the engine's internal string / object plumbing, not mod-callable API.
// Prefer the managed wrappers (NativeString, NativeArray) in mod code.
```

---

**Last updated:** 2026-05-14  
**Source version:** TaleWorlds.Native.dll v1.3.15
