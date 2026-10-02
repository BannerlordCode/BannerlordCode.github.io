---
title: "SubModuleInfo"
description: "SubModuleInfo：TaleWorlds.ModuleManager 的 public 类；公开成员 11 个（方法 1、属性 8、字段 0）。canonical 桶 modulemanager。源文件 TaleWorlds.ModuleManager/SubModuleInfo.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SubModuleInfo

**Namespace:** `TaleWorlds.ModuleManager`
**Module:** `TaleWorlds.ModuleManager`
**Type:** `public class SubModuleInfo`
**File:** `TaleWorlds.ModuleManager/SubModuleInfo.cs`
**Bucket:** `modulemanager` (rule:TaleWorlds.ModuleManager)

## 概述

SubModuleInfo 位于 TaleWorlds.ModuleManager 模块，源文件 TaleWorlds.ModuleManager/SubModuleInfo.cs。它是一个 public 类，继承链为 SubModuleInfo。public/protected 成员共 11 个：1 方法、8 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SubModuleInfo 落在 canonical 桶 `modulemanager`（命中规则 `rule:TaleWorlds.ModuleManager`），命名空间 `TaleWorlds.ModuleManager`，继承链 SubModuleInfo。成员构成以属性为主（属性 8/11，方法 1/11），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.ModuleManager/SubModuleInfo.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `public string Name` | 属性 |
| `DLLName` | `public string DLLName` | 属性 |
| `DLLPath` | `public string DLLPath` | 属性 |
| `IsTWCertifiedDLL` | `public bool IsTWCertifiedDLL` | 属性 |
| `DLLExists` | `public bool DLLExists` | 属性 |
| `List` | `public List<string>Assemblies` | 属性 |
| `SubModuleClassTypeName` | `public string SubModuleClassTypeName` | 属性 |
| `SubModuleInfo` | `public SubModuleInfo()` | 构造函数 |
| `LoadFrom` | `public void LoadFrom(XmlNode subModuleNode, string path, bool isOfficial)` | 方法 |
| `SubModuleTags` | `public enum SubModuleTags` | 属性 |
| `SubModuleTags` | `public enum SubModuleTags` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 DependedModule](../DependedModule/)
- [同命名空间 Extensions](../Extensions/)
- [同命名空间 IPlatformModuleExtension](../IPlatformModuleExtension/)
- [同命名空间 ModuleCategory](../ModuleCategory/)
