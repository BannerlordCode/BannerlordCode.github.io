---
title: 引擎核心 / Engine Core
description: TaleWorlds.Native.dll 引擎核心类参考
---

# 引擎核心 / Engine Core

## 概述 / Overview

引擎核心模块包含 TaleWorlds.Native.dll 的核心接口和实现。

The engine core module contains core interfaces and implementations for TaleWorlds.Native.dll.

## 核心类 / Core Classes

### Core

引擎核心接口。

```cpp
Core::vftable
```

**主要方法:**
- `Initialize()` - 初始化引擎
- `Tick()` - 每帧更新
- `Shutdown()` - 关闭引擎

### CoreImpl

引擎核心实现类。

```cpp
CoreImpl::vftable
```

### Managed_engine_callbacks

托管引擎回调接口。处理 C# 托管代码与原生引擎的交互。

```cpp
Managed_engine_callbacks::vftable
```

**用途:** 管理托管代码与引擎之间的通信

### Managed_library_callbacks

托管库回调接口。

```cpp
Managed_library_callbacks::vftable
```

### Managed_interface

托管接口基类。

```cpp
Managed_interface::vftable
```

### Managed_core_callbacks

核心回调接口。

```cpp
Managed_core_callbacks::vftable
```

### rglLibrary_interface

rgl 库接口。

```cpp
rglLibrary_interface::vftable
```

### rglManaged_interface

rgl 托管接口。

```cpp
rglManaged_interface::vftable
```

### rglManaged_message_interface

rgl 托管消息接口。

```cpp
rglManaged_message_interface::vftable
```

### rglMessage_interface

消息接口。

```cpp
rglMessage_interface::vftable
```

### rglApplication_base

应用程序基类。

```cpp
rglApplication_base::vftable
```

### rglApp_window_base

应用程序窗口基类。

```cpp
rglApp_window_base::vftable
```

### rglApp_window_winapi

Windows API 应用程序窗口。

```cpp
rglApp_window_winapi::vftable
```

## FTDN 接口 / FTDN Interfaces

FTDN (Foreign Type Description Network) 是 TaleWorlds 的跨语言类型系统。

FTDN (Foreign Type Description Network) is TaleWorlds' cross-language type system.

### ftdnManaged_interface

托管接口。

```cpp
ftdnManaged_interface::vftable
```

### ftdnNative_array

原生数组接口。提供与 C# NativeArray 交互的能力。

```cpp
ftdnNative_array::vftable
```

### ftdnNative_string

原生字符串接口。提供与 C# NativeString 交互的能力。

```cpp
ftdnNative_string::vftable
```

### ftdnNative_object_array

原生对象数组接口。提供与 C# NativeObjectArray 交互的能力。

```cpp
ftdnNative_object_array::vftable
```

## 关键函数 / Key Functions

### pass_managed_library_callback_method_pointers

```c
void pass_managed_library_callback_method_pointers(undefined8 param_1)
```

**描述:** DLL 入口点函数，注册托管回调函数指针

**参数:**
- `param_1` - 回调函数指针数组

**调用时机:** 在 DLL 加载时由 C# 运行时调用

## 内存管理 / Memory Management

### rglReference_counted_object

引用计数对象基类。

```cpp
rglReference_counted_object::vftable
```

### rglReference_counted_atomic

原子引用计数对象。

```cpp
rglReference_counted_atomic::vftable
```

### BlockBasedAllocator

分块内存分配器。

```cpp
BlockBasedAllocator::vftable
```

### Heap_allocator

堆内存分配器。

```cpp
Heap_allocator::vftable
```

## 线程管理 / Thread Management

### rglWorker_thread

工作线程。

```cpp
rglWorker_thread::vftable
```

### rglWorker_thread_block_task

工作线程阻塞任务。

```cpp
rglWorker_thread_block_task::vftable
```

### rglPersistent_background_thread

持久后台线程。

```cpp
rglPersistent_background_thread::vftable
```

## 任务系统 / Task System

### rglSimpleTask

简单任务。

```cpp
rglSimpleTask::vftable
```

### rglSimpleTask_unwaitable

不可等待简单任务。

```cpp
rglSimpleTask_unwaitable::vftable
```

### rglManaged_concurrent_task

托管并发任务。

```cpp
rglManaged_concurrent_task::vftable
```

### rglConcurrent_task_base

并发任务基类。

```cpp
rglConcurrent_task_base::vftable
```

### rglConcurrent_unwaitable_task_base

不可等待并发任务基类。

```cpp
rglConcurrent_unwaitable_task_base::vftable
```

## 回调接口 / Callback Interfaces

### ILocker

锁接口。

### ILogger

日志接口。

```cpp
ILogger::vftable
```

### IJobScheduler

任务调度器接口。

```cpp
IJobScheduler::vftable
```

## 模块扩展 / Module Extensions

### ftmmModule_extension

模块扩展基类。

```cpp
ftmmModule_extension::vftable
```

### ftmmSteam_module_extension

Steam 模块扩展。

```cpp
ftmmSteam_module_extension::vftable
```

### ftmmEpic_module_extension

Epic 模块扩展。

```cpp
ftmmEpic_module_extension::vftable
```
