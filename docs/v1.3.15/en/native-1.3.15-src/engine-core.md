---
title: Engine Core
description: TaleWorlds.Native.dll engine core class reference
---

# Engine Core

## Overview

The engine core module contains core interfaces and implementations for TaleWorlds.Native.dll.

## Core Classes

### Core

Engine core interface.

```cpp
Core::vftable
```

**Main Methods:**
- `Initialize()` - Initialize engine
- `Tick()` - Per-frame update
- `Shutdown()` - Shutdown engine

### CoreImpl

Engine core implementation class.

```cpp
CoreImpl::vftable
```

### Managed_engine_callbacks

Managed engine callbacks interface. Handles communication between C# managed code and native engine.

```cpp
Managed_engine_callbacks::vftable
```

**Purpose:** Manage communication between managed code and engine

### Managed_library_callbacks

Managed library callbacks interface.

```cpp
Managed_library_callbacks::vftable
```

### Managed_interface

Managed interface base class.

```cpp
Managed_interface::vftable
```

### Managed_core_callbacks

Core callbacks interface.

```cpp
Managed_core_callbacks::vftable
```

### rglLibrary_interface

rgl library interface.

```cpp
rglLibrary_interface::vftable
```

### rglManaged_interface

rgl managed interface.

```cpp
rglManaged_interface::vftable
```

### rglManaged_message_interface

rgl managed message interface.

```cpp
rglManaged_message_interface::vftable
```

### rglMessage_interface

Message interface.

```cpp
rglMessage_interface::vftable
```

### rglApplication_base

Application base class.

```cpp
rglApplication_base::vftable
```

### rglApp_window_base

Application window base class.

```cpp
rglApp_window_base::vftable
```

### rglApp_window_winapi

Windows API application window.

```cpp
rglApp_window_winapi::vftable
```

## FTDN Interfaces

FTDN (Foreign Type Description Network) is TaleWorlds' cross-language type system.

### ftdnManaged_interface

Managed interface.

```cpp
ftdnManaged_interface::vftable
```

### ftdnNative_array

Native array interface. Provides ability to interact with C# NativeArray.

```cpp
ftdnNative_array::vftable
```

### ftdnNative_string

Native string interface. Provides ability to interact with C# NativeString.

```cpp
ftdnNative_string::vftable
```

### ftdnNative_object_array

Native object array interface. Provides ability to interact with C# NativeObjectArray.

```cpp
ftdnNative_object_array::vftable
```

## Key Functions

### pass_managed_library_callback_method_pointers

```c
void pass_managed_library_callback_method_pointers(undefined8 param_1)
```

**Description:** DLL entry point function, registers managed callback function pointers

**Parameters:**
- `param_1` - Callback function pointer array

**Called when:** Called by C# runtime when DLL is loaded

## Memory Management

### rglReference_counted_object

Reference counted object base class.

```cpp
rglReference_counted_object::vftable
```

### rglReference_counted_atomic

Atomic reference counted object.

```cpp
rglReference_counted_atomic::vftable
```

### BlockBasedAllocator

Block memory allocator.

```cpp
BlockBasedAllocator::vftable
```

### Heap_allocator

Heap memory allocator.

```cpp
Heap_allocator::vftable
```

## Thread Management

### rglWorker_thread

Worker thread.

```cpp
rglWorker_thread::vftable
```

### rglWorker_thread_block_task

Worker thread block task.

```cpp
rglWorker_thread_block_task::vftable
```

### rglPersistent_background_thread

Persistent background thread.

```cpp
rglPersistent_background_thread::vftable
```

## Task System

### rglSimpleTask

Simple task.

```cpp
rglSimpleTask::vftable
```

### rglSimpleTask_unwaitable

Unwaitable simple task.

```cpp
rglSimpleTask_unwaitable::vftable
```

### rglManaged_concurrent_task

Managed concurrent task.

```cpp
rglManaged_concurrent_task::vftable
```

### rglConcurrent_task_base

Concurrent task base class.

```cpp
rglConcurrent_task_base::vftable
```

### rglConcurrent_unwaitable_task_base

Unwaitable concurrent task base class.

```cpp
rglConcurrent_unwaitable_task_base::vftable
```

## Callback Interfaces

### ILocker

Locker interface.

### ILogger

Logger interface.

```cpp
ILogger::vftable
```

### IJobScheduler

Job scheduler interface.

```cpp
IJobScheduler::vftable
```

## Module Extensions

### ftmmModule_extension

Module extension base class.

```cpp
ftmmModule_extension::vftable
```

### ftmmSteam_module_extension

Steam module extension.

```cpp
ftmmSteam_module_extension::vftable
```

### ftmmEpic_module_extension

Epic module extension.

```cpp
ftmmEpic_module_extension::vftable
```
