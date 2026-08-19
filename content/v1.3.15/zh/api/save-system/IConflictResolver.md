---
title: "IConflictResolver"
description: "跨版本冲突解析器契约：当旧档引用的类型或成员在现行版本里被改名/重组时，用 IsApplicable 判断是否适用某游戏版本，再用 GetNewType / GetFieldMemberWithId / GetPropertyMemberWithId 把旧身份映射到新身份，避免读档坏档。"
---

# IConflictResolver

**命名空间：** `TaleWorlds.SaveSystem.Resolvers`  
**模块：** `TaleWorlds.SaveSystem`  
**类型：** `public interface IConflictResolver`  
**基类：** —  
**源文件：** `TaleWorlds.SaveSystem/Resolvers/IConflictResolver.cs`

## 概述

`IConflictResolver` 是保存系统提供的一组**跨版本兼容钩子**之一，用于在**加载旧档**时解决“存档里记的类型/成员，在当前游戏版本里已经改名或重组”的冲突。它有四个方法：`IsApplicable(ApplicationVersion version)` 判断该解析器是否适用于正在加载的存档版本；`GetNewType()` 返回应当替换成的新 `Type`；`GetFieldMemberWithId(MemberTypeId)` 与 `GetPropertyMemberWithId(MemberTypeId)` 分别把旧的字段/属性成员编号映射到新的成员编号（[MemberTypeId](../MemberTypeId)）。当官方或 mod 在某次更新中重构了可保存类型（例如把一个字段拆成两个、或把类换名），对应 `IConflictResolver` 就是让旧档仍能读出的“翻译层”。

## 心智模型

- **是什么：** 加载期的“旧身份 → 新身份”翻译器，专治跨版本类型/成员漂移。
- **何时用：** 你在维护一个会随大版本演进的 mod，且不得不改动已发布类型的类名、字段结构或成员编号时，应提供 `IConflictResolver` 让旧档兼容；它也常用于官方版本升级时的内部迁移。
- **何时不要用：** 不要把它当成“运行时动态换类型”的通用机制——它只在加载旧档、且 `IsApplicable` 命中时才被咨询。新存档不会触发它。日常新增字段请直接用 `[SaveableField(id)]` + [SaveableTypeDefiner](../SaveableTypeDefiner)，不要为每个新增都写 resolver。也不要在 `IsApplicable` 里做重活或抛异常，它会被频繁调用。
- **谁创建/持有：** 由 definer / 存档迁移逻辑注册，在加载流程中被 [SaveManager](../SaveManager) 的加载侧按存档 `ApplicationVersion` 逐个咨询；mod 通常经由自己的 [SaveableTypeDefiner](../SaveableTypeDefiner) 或官方迁移表挂接。
- **处在哪一层：** 处于“加载兼容层”——在类型定义（[DefinitionContext](../DefinitionContext)）之下、[LoadContext](../LoadContext) / [ArchiveDeserializer](../ArchiveDeserializer) 之上，是读档还原前的预处理。

## 何时使用 / 何时不要使用

**使用（实践层面）：** 某次更新把 `MyModState` 改名为 `MyModCampaignState`，旧档仍记旧名 → 提供 resolver，在 `IsApplicable(旧版本)` 为真时 `GetNewType()` 返回新类。

**不要使用：**

- 不要指望 resolver 修复“完全没登记 definer”的类型：它只翻译已存在的身份，不替你补定义。
- 不要返回与当前 definer 不符的 `Type` / `MemberTypeId`：翻译结果必须能在现行 [DefinitionContext](../DefinitionContext) 里找到，否则仍会加载失败。

## 依赖图

- 成员身份：[MemberTypeId](../MemberTypeId) 是 `GetFieldMemberWithId` / `GetPropertyMemberWithId` 的入参与返回，承载“旧成员编号 → 新成员编号”的映射。
- 版本判断：`ApplicationVersion` 作为 `IsApplicable` 入参，决定 resolver 是否启用（类型在 `TaleWorlds.Library`）。
- 加载流程：[SaveManager](../SaveManager) 在加载旧档时咨询 resolver；[LoadContext](../LoadContext) 与 [ArchiveDeserializer](../ArchiveDeserializer) 据映射结果还原。
- 类型定义：[DefinitionContext](../DefinitionContext) / [SaveableTypeDefiner](../SaveableTypeDefiner) 提供现行类型与成员，是翻译目标。

## 风险

- **`IsApplicable` 判断过宽/过窄** → 过宽会错误翻译不该迁移的存档，过窄会让本该迁移的旧档读不出，二者都致坏档或数据错乱。
- **返回的 `Type` / `MemberTypeId` 在当前 definer 不存在** → 翻译后依旧“找不到类型/成员定义”，加载失败。
- **成员编号映射不全** → 只映射字段忘了映射属性（或反之），旧档部分成员落空、拿到默认值，属隐蔽数据丢失。
- **跨版本语义变化未同步** → 即使身份映射正确，新旧类型的字段含义若不同，迁移后逻辑仍可能错。

## 成员说明

### `bool IsApplicable(ApplicationVersion version)`

判断该 resolver 是否适用于正在加载的存档版本。返回 `true` 才会被后续方法咨询。应只针对真正发生过结构变化的版本区间返回 `true`。

### `Type GetNewType()`

返回应当替换旧类型的新 `Type`。必须已在现行 [DefinitionContext](../DefinitionContext) 登记。

### `MemberTypeId GetFieldMemberWithId(MemberTypeId memberTypeId)`

把旧的字段成员编号翻译成当前版本对应的字段成员编号；若无需翻译可返回原值。

### `MemberTypeId GetPropertyMemberWithId(MemberTypeId memberTypeId)`

与上方同理，但针对属性成员。务必与字段映射一起补全，避免遗漏。

## 示例

模组侧在加载旧档时由引擎自动咨询 resolver；而**保存**仍是统一的入口——确保现行类型已被定义，旧档才能被正确翻译：

```csharp
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Game.Current, metaData, saveName, driver);
```

一个 resolver 的典型实现骨架（加载旧档时由引擎按版本调用，本身不含 `SaveManager` 调用）：

```csharp
public class MyModConflictResolver : IConflictResolver
{
    public bool IsApplicable(ApplicationVersion version) => version < ApplicationVersion.FromString("e1.2.0");
    public Type GetNewType() => typeof(MyModCampaignState); // 新类名
    public MemberTypeId GetFieldMemberWithId(MemberTypeId id) => id; // 字段编号未变
    public MemberTypeId GetPropertyMemberWithId(MemberTypeId id) => id;
}
```

> 注意：resolver 只在加载旧档且 `IsApplicable` 命中时生效；它翻译的是身份映射，必须保证目标类型/成员已在 [SaveableTypeDefiner](../SaveableTypeDefiner) 登记。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[MemberTypeId](../MemberTypeId) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [DefinitionContext](../DefinitionContext) · [LoadContext](../LoadContext) · [ArchiveDeserializer](../ArchiveDeserializer) · [SaveManager](../SaveManager)
