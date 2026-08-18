---
title: "SaveablePropertyAttribute"
description: "标记类的实例属性为可持久化存档成员的 Attribute；LocalSaveId 是该属性在所属类型内部的稳定编号（schema 身份），保存系统按编号在 Save 时读取 getter、在 Load 时通过 setter 回填。"
---
# SaveablePropertyAttribute

**命名空间：** TaleWorlds.SaveSystem
**模块：** TaleWorlds.SaveSystem
**类型：** `public class SaveablePropertyAttribute : Attribute`
**源文件：** bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveablePropertyAttribute.cs

## 概述

`SaveablePropertyAttribute` 派生自 `System.Attribute`，并被 `[AttributeUsage(AttributeTargets.Property)]` 限定只能贴在 **属性（Property）** 上。它告诉保存系统：“这个实例属性是存档成员，并使用 `LocalSaveId` 作为它在所属类型内部的本地编号”。保存系统在 `Save` 时通过属性的 getter 取值，在 `Load` 时通过 setter 回填。它解决“哪个属性进入对象图”，不解决 Behavior 分桶、类型注册或业务 Action。

## 心智模型

属性版和 [SaveableFieldAttribute](../SaveableFieldAttribute) 是同一保存系统中的两种入口：

- `SaveableProperty` 适合希望通过 getter 读取、通过 setter 在加载时写回的成员；
- `SaveableField` 适合实现细节字段；
- 两者的 `LocalSaveId` 都是所属类型的稳定 schema 编号；同一类型内字段与属性共用一套编号空间，不要复用；
- Attribute 只是成员声明。所属类仍要由 `SaveableTypeDefiner` 放入定义上下文，属性类型也必须可序列化。

`SaveManager` 在定义阶段反射读取这些 Attribute，由 `TypeDefinition.CollectProperties()` 建立属性成员表；存档时 `ArchiveSerializer` 调 getter 收集、读档时调 setter 回填。

## 何时使用 / 何时不要使用

适合公开只读视图、封装状态或官方对象风格的属性，例如 `TextObject.Attributes` 的 `get; private set;` 形式（原生标注 `[SaveableProperty(2)]`），以及 `MBObjectBase.StringId` / `MBObjectBase.Id`（`[SaveableProperty(1)]`、`[SaveableProperty(2)]`）。

不适合：

- 把 setter 设计成会触发战役 Action、UI 刷新或事件链的入口；加载阶段写入属性时这些副作用会在错误时机发生。
- Behavior 的私有状态通常用 [IDataStore](../../campaign-ext/IDataStore)，而不是为了一个计数器单独建立保存定义类。
- 纯运行时缓存和外部句柄不要标记。
- 字段成员应使用 [SaveableFieldAttribute](../SaveableFieldAttribute)，`SaveableProperty` 无法贴在 Field 上。

## 依赖图

- 定义：[SaveableTypeDefiner](../SaveableTypeDefiner) 注册所属类和类型编号。
- 执行：[SaveManager](../SaveManager) 构建定义上下文并处理 `Save` / `Load`。
- 序列化：[ArchiveSerializer](../ArchiveSerializer) 按 `LocalSaveId` 调 getter/setter。
- 成员表：[TypeDefinition](../TypeDefinition) 持有属性集合并构建 `MemberTypeId`。
- 对比：[SaveableFieldAttribute](../SaveableFieldAttribute) 处理字段；[IDataStore](../../campaign-ext/IDataStore) 处理 Behavior 状态。
- 典型值：[TextObject](../../localization/TextObject) 自身同时展示了 `SaveableField` 和 `SaveableProperty` 的组合。

## 风险

- **重复 `LocalSaveId`。** 同一类型内字段和属性共用编号空间，必须全部唯一；重复编号会让定义或回填对应到错误成员。
- **改变编号或类型。** 已发布存档把编号和成员类型当 schema；直接换号、把 `Hero` 改成字符串或删除属性，都可能让旧档加载失败。新版本应保留旧成员或增加版本化成员并写兼容迁移。
- **setter 副作用。** 加载器回填属性时会调用 setter；若 setter 触发 Action、事件或访问尚未加载的 `Campaign.Current` 状态，可能产生重复事件、空引用或半初始化世界。让 setter 只赋值，派生工作放到明确的加载后阶段。
- **getter 不稳定。** 保存时 getter 返回的值必须可序列化且不依赖临时 UI/引擎状态；不要把计算属性标成保存属性。
- **只加 Attribute 不够。** 没有 `SaveableTypeDefiner.AddClassDefinition`，`SaveManager` 的定义上下文没有所属类型，保存会返回定义错误。
- **与 `IDataStore` 混淆。** 属性编号按类型定义，Behavior key 按字符串分桶；不要用改 `LocalSaveId` 的方式修复 Behavior key 兼容问题。

## 成员说明

### 构造参数 `localSaveId`（`short`）

构造时传入的、在所属类型内部唯一且跨版本稳定的属性编号，存入 `LocalSaveId` 属性。它是 `short` 类型（范围 −32768…32767），同一类型内可用编号有限，规划时要与字段共用编号空间并留好扩展区间。

### 属性 `LocalSaveId`（`short`，可读写）

保存的属性编号。`[SaveableProperty(2)]` 中的 `2` 即落到这里。产品代码应把它视为已经发布的 schema 编号，不要运行中改写。`TypeDefinition.CollectProperties()` 以声明类型 class level 加上这个 ID 构成 `MemberTypeId`；属性名不参与匹配。

## 示例

```csharp
using TaleWorlds.SaveSystem;
using TaleWorlds.Core;
using TaleWorlds.Localization;

// 原生风格：TextObject 用 SaveableField 标字段、用 SaveableProperty 标属性
public class TextObject
{
    [SaveableField(1)] public string Value;
    [SaveableProperty(2)] public Dictionary<string, object> Attributes { get; private set; }
}

// 引擎在启动保存系统时初始化定义上下文（mod 不应自己调用这些入口去“注册”属性）
SaveManager.InitializeGlobalDefinitionContext();
var missingTypes = SaveManager.CheckSaveableTypes();

// 任何以 Game 为根的保存都会顺带收集 TextObject 等已注册类型
var output = SaveManager.Save(Game.Current, metaData, saveName, driver);
```

这是一个实际可理解的保存链：`TextObject` 和它所引用的类型需要各自已经存在于保存定义图中，属性成员才能在 `Save`/`Load` 时被收集与回填。属性的 private setter 不是绕过保存系统的技巧，而是允许加载器回填后仍保持普通运行时代码的封装边界。

## 跨版本提示

1.3.15 与 1.4.5 的构造函数、Attribute 目标和 `LocalSaveId` 类型一致。`TextObject.Attributes` 仍使用 `[SaveableProperty(2)]`，说明属性路线适合保存封装数据，但不代表任意属性都可安全加入旧档 schema。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[SaveableRootClassAttribute](../SaveableRootClassAttribute) · [SaveableFieldAttribute](../SaveableFieldAttribute) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [PropertyDefinition](../PropertyDefinition) · [原生用法：TextObject](../../localization/TextObject) · [存档对象基类：MBObjectBase](../../campaign-ext/MBObjectBase)
