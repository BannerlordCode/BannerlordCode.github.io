---
title: 工具函数 / Utilities
description: TaleWorlds.Native.dll 工具函数和辅助类参考
---

# 工具函数 / Utilities

## 概述 / Overview

工具模块包含字符串处理、数学运算、日志系统等辅助功能。

The utilities module contains helper functions for string processing, math operations, logging system, etc.

## 字符串 / String

### rglString_base

字符串基类。

```cpp
rglString_base::vftable
```

### rglVarString

可变字符串。

```cpp
rglVarString::vftable
```

### rglConstString

常量字符串模板类。

```cpp
rglConstString<N>::vftable
// N 可以是 16, 32, 64, 128, 1024 等
```

## 数学 / Math

### Vec2

二维向量。

### Vec3

三维向量。

### Mat3

3x3 矩阵。

### Vec4

四维向量。

### rotator

旋转。

## 异常处理 / Exception Handling

### exception

异常基类。

```cpp
exception::vftable
```

### bad_alloc

内存分配失败。

```cpp
bad_alloc::vftable
```

### bad_cast

类型转换失败。

```cpp
bad_cast::vftable
```

### bad_array_new_length

数组长度无效。

```cpp
bad_array_new_length::vftable
```

### domain_error

域错误。

```cpp
domain_error::vftable
```

### logic_error

逻辑错误。

```cpp
logic_error::vftable
```

### _com_error

COM 错误。

```cpp
_com_error::vftable
```

## 正则表达式 / Regex

### _Node_base

正则节点基类。

```cpp
_Node_base::vftable
```

### _Node_assert

断言节点。

```cpp
_Node_assert::vftable
```

### _Node_back

回溯节点。

```cpp
_Node_back::vftable
```

### _Node_base

基础节点。

```cpp
_Node_base::vftable
```

### _Node_capture

捕获节点。

```cpp
_Node_capture::vftable
```

### _Node_end_group

结束组节点。

```cpp
_Node_end_group::vftable
```

### _Node_end_rep

结束重复节点。

```cpp
_Node_end_rep::vftable
```

### _Node_endif

条件结束节点。

```cpp
_Node_endif::vftable
```

### _Node_if

条件节点。

```cpp
_Node_if::vftable
```

### _Node_rep

重复节点。

```cpp
_Node_rep::vftable
```

### _Root_node

根节点。

```cpp
_Root_node::vftable
```

## 类型信息 / Type Info

### type_info

类型信息。

```cpp
type_info::vftable
```

### filter

过滤器。

```cpp
filter::vftable
```

## Producer/Consumer

### ProducerBase

生产者基类。

```cpp
ProducerBase::vftable
```

### ImplicitProducer

隐式生产者。

```cpp
ImplicitProducer::vftable
```

### ExplicitProducer

显式生产者。

```cpp
ExplicitProducer::vftable
```

### FtlObject

FTL 对象。

```cpp
ftlObject::vftable
```

## 其他工具类 / Other Utility Classes

### box

盒子。

```cpp
box::vftable
```

### rotator

旋转器。

```cpp
rotator::vftable
```

### Edit_data

编辑数据。

```cpp
Edit_data::vftable
```

## 任务回调 / Task Callbacks

### IResourceCallbacks

资源回调接口。

```cpp
IResourceCallbacks::vftable
```

### IReadingCallbacks

读取回调接口。

```cpp
IReadingCallbacks::vftable
```

## 内存管理 / Memory Management

### rglMemory_allocator_base

内存分配器基类。

```cpp
rglMemory_allocator_base::vftable
```

## 配置 / Configuration

### rglConfig

配置。

```cpp
rglConfig::vftable
```

### rglDev_config

开发者配置。

```cpp
rglDev_config::vftable
```

### rglUser_config

用户配置。

```cpp
rglUser_config::vftable
```
