---
title: BindingPath
description: BindingPath - GauntletUI 数据绑定路径，按反斜杠分隔的属性节点序?
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BindingPath`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BindingPath
**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** class

## 概述
`BindingPath

` 描述 GauntletUI 数据绑定中从源对象到目标属性的寻址路径。路径以反斜?

`\

` 分隔，例?

`Parent\Items\0\Name

`。它把字符串切分?

`Nodes

` 数组，并提供 

`FirstNode

` / 

`LastNode

` / 

`SubPath

` / 

`ParentPath

` 等视图?
该类还支持路径关系判断（

`IsRelatedWith

`）、相对路径拼接（

`Append

`）、`..

` 简化（

`Simplify

`）以及与索引节点配合?

`DecrementIfRelatedWith

`（用于在列表删除元素时调整后续索引）?
## 心智模型
?

`BindingPath

` 看作绑定系统中的"属性寻址字符?+ 节点数组"。当 ViewModel 上的集合发生增删时，绑定系统通过 

`IsRelatedWith

` 找到受影响的子路径，并用 

`DecrementIfRelatedWith

` 把索引节点减一来保持引用稳定?
## 主要属?\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`Path

` \| 

`string

` \| 原始路径字符?\|
\| 

`Nodes

` \| 

`string[]

` \| 切分后的节点数组 \|
\| 

`FirstNode

` \| 

`string

` \| 首个节点 \|
\| 

`LastNode

` \| 

`string

` \| 末尾节点 \|
\| 

`SubPath

` \| 

`BindingPath

` \| 去掉首节点后的子路径 \|
\| 

`ParentPath

` \| 

`BindingPath

` \| 去掉末节点后的父路径 \|

## 主要方法
### CreateFromProperty
`

`

`csharp
public static BindingPath CreateFromProperty(string propertyName)
`

`

`
为单属性名构造路径?
### IsRelatedWith / IsRelatedWithPath / IsRelatedWithPathAsString
`

`

`csharp
public bool IsRelatedWith(BindingPath referencePath)
public static bool IsRelatedWithPath(string path, BindingPath referencePath)
public static bool IsRelatedWithPathAsString(string path, string referencePath)
`

`

`
判断当前路径是否以指定路径为前缀?
### Simplify
`

`

`csharp
public BindingPath Simplify()
`

`

`
应用 

`..

` 规则化简路径，返回新 

`BindingPath

`?
### Append
`

`

`csharp
public BindingPath Append(BindingPath bindingPath)
`

`

`
拼接两段路径，返回新?

`BindingPath

`?
### DecrementIfRelatedWith
`

`

`csharp
public void DecrementIfRelatedWith(BindingPath path, int startIndex)
`

`

`
若当前路径是 

`path

` 的扩展且其下一节点为数字索??

`startIndex

`，则将该索引?1?
## 使用示例
### 示例: 解析并遍历绑定路?**场景**: 调试 GauntletUI 绑定
`

`

`csharp
var bp = new BindingPath("Hero\\Inventory\\2\\ItemName");
Console.WriteLine(bp.FirstNode);   // Hero
Console.WriteLine(bp.LastNode);    // ItemName
var parent = bp.ParentPath;        // Hero\Inventory\2
`

`

`
**要点**: 节点间用 

`\

` 分隔；索引节点是字符串形式的整数?
## 参见
- [完整类目录](../catalog-core)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
