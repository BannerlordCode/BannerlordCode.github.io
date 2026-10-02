---
title: "ICallbackManager"
description: "ICallbackManager：TaleWorlds.DotNet 的 public 接口；公开成员 5 个（方法 5、属性 0、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.DotNet/ICallbackManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ICallbackManager

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public interface ICallbackManager`
**File:** `TaleWorlds.DotNet/ICallbackManager.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.DotNet)

## 概述

ICallbackManager 位于 TaleWorlds.DotNet 模块，源文件 TaleWorlds.DotNet/ICallbackManager.cs。它是一个 public 接口，继承链为 ICallbackManager。public/protected 成员共 5 个：5 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ICallbackManager 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.DotNet`），命名空间 `TaleWorlds.DotNet`，继承链 ICallbackManager。成员构成以方法为主（方法 5/5，属性 0/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.DotNet/ICallbackManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Initialize` | `void Initialize();` | 方法 |
| `Delegate[]GetDelegates` | `Delegate[]GetDelegates();` | 方法 |
| `object>GetScriptingInterfaceObjects` | `Dictionary<string, object>GetScriptingInterfaceObjects();` | 方法 |
| `SetFunctionPointer` | `void SetFunctionPointer(int id, IntPtr pointer);` | 方法 |
| `CheckSharedStructureSizes` | `void CheckSharedStructureSizes();` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 CallbackDebugTool](../CallbackDebugTool/)
- [同命名空间 CallbackStringBufferManager](../CallbackStringBufferManager/)
- [同命名空间 Controller](../Controller/)
- [同命名空间 CustomEngineStructMemberData](../CustomEngineStructMemberData/)
