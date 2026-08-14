---
title: "SaveablePropertyAttribute"
description: "把实例属性加入 TaleWorlds.SaveSystem 的 Attribute；LocalSaveId 定义属性在所属类型中的持久化身份。"
---
# SaveablePropertyAttribute

**Namespace:** `TaleWorlds.SaveSystem`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `public class SaveablePropertyAttribute : Attribute`  
**Base:** `System.Attribute`  
**Source:** `TaleWorlds.SaveSystem/SaveablePropertyAttribute.cs`

## 概述

`SaveablePropertyAttribute(short localSaveId)` 是属性路线的存档声明。保存系统反射该 Attribute，按 `LocalSaveId` 识别属性，然后由 [SaveableTypeDefiner](../SaveableTypeDefiner/) 注册所属类型。它解决“哪个属性进入对象图”，不解决 Behavior 分桶、类型注册或业务 Action。

## 心智模型

属性版和 [SaveableFieldAttribute](../SaveableFieldAttribute/) 是同一保存系统中的两种入口：

- `SaveableProperty` 适合希望通过 getter 读取、通过 setter 在加载时写回的成员。
- `SaveableField` 适合实现细节字段。
- 两者的 `LocalSaveId` 都是所属类型的稳定 schema 编号；同一类型不要跨字段/属性复用编号。
- Attribute 只是成员声明。所属类仍要由 `SaveableTypeDefiner` 放入定义上下文，类型值也必须可序列化。

## 何时用 / 何时不要用

适合公开只读视图、封装状态或官方对象风格的属性，例如 `TextObject.Attributes` 的 `get; private set;` 形式。不适合把 setter 设计成会触发战役 Action、UI 刷新或事件链的入口；加载阶段写入属性时这些副作用会在错误时机发生。

Behavior 的私有状态通常用 [IDataStore](../../campaign-ext/IDataStore/)，而不是为了一个计数器单独建立保存定义类。纯运行时缓存和外部句柄不要标记。

## 成员

```csharp
[AttributeUsage(AttributeTargets.Property)]
public class SaveablePropertyAttribute : Attribute
{
    public short LocalSaveId { get; set; }
    public SaveablePropertyAttribute(short localSaveId)
    {
        LocalSaveId = localSaveId;
    }
}
```

源码只允许它标记 `Property`。getter 必须能在保存时取得值，setter 必须能在加载时让保存系统回填；`get` 或 `set` 中不应依赖尚未恢复的其他对象。

## 真实示例：属性成员与类型定义

```csharp
[Serializable]
public sealed class RelicInfo
{
    [SaveableProperty(1)]
    public TextObject Name { get; private set; }

    [SaveableProperty(2)]
    public Hero Owner { get; private set; }

    public RelicInfo(TextObject name, Hero owner)
    {
        Name = name;
        Owner = owner;
    }
}

public sealed class RelicSaveDefiner : SaveableTypeDefiner
{
    public RelicSaveDefiner() : base(910000) { }

    protected override void DefineClassTypes()
    {
        AddClassDefinition(typeof(RelicInfo), 1);
    }
}
```

这是一个实际可理解的保存链：`TextObject` 和 `Hero` 需要各自已经存在于保存定义图中，`RelicInfo` 再通过 definer 注册。属性的 private setter 不是绕过保存系统的技巧，而是允许加载器回填后仍保持普通运行时代码的封装边界。

属性成员与所属类最终由保存系统收集；引擎在启动保存系统时初始化定义上下文（mod 不应自己调用这些入口去“注册”属性）：

```csharp
SaveManager.InitializeGlobalDefinitionContext();
List<Type> missingTypes = SaveManager.CheckSaveableTypes();
```

## 风险与防坏档

- **重复 `LocalSaveId`。** 同一类型内字段和属性都要唯一；重复编号会让定义或回填对应到错误成员。
- **改变编号或类型。** 已发布存档把编号和成员类型当 schema；直接换号、改 `Hero` 为字符串或删除属性，都可能让旧档加载失败。新版本应保留旧成员或增加版本化成员并写兼容迁移。
- **setter 副作用。** 加载器回填属性时会调用 setter；若 setter 触发 Action、事件或访问尚未加载的 `Campaign.Current` 状态，可能产生重复事件、空引用或半初始化世界。让 setter 只赋值，派生工作放到明确的加载后阶段。
- **getter 不稳定。** 保存时 getter 返回的值必须可序列化且不依赖临时 UI/引擎状态；不要把计算属性标成保存属性。
- **只加 Attribute 不够。** 没有 `SaveableTypeDefiner.AddClassDefinition`，`SaveManager` 的定义上下文没有所属类型，保存会返回定义错误。
- **与 `IDataStore` 混淆。** 属性编号按类型定义，Behavior key 按字符串分桶；不要用改 `LocalSaveId` 的方式修复 Behavior key 兼容问题。

## 跨版本提示

1.3.15 与 1.4.5 的构造函数、Attribute 目标和 `LocalSaveId` 类型一致。`TextObject.Attributes` 仍使用 `[SaveableProperty(2)]`，说明属性路线适合保存封装数据，但不代表任意属性都可安全加入旧档 schema。

## 依赖关系

- 定义：[SaveableTypeDefiner](../SaveableTypeDefiner/) 注册所属类和类型编号。
- 执行：[SaveManager](../SaveManager/) 构建定义上下文并处理 `Save`/`Load`。
- 对比：[SaveableFieldAttribute](../SaveableFieldAttribute/) 处理字段；[IDataStore](../../campaign-ext/IDataStore/) 处理 Behavior 状态。
- 典型值：[TextObject](../../localization/TextObject/) 自身同时展示了 `SaveableField` 和 `SaveableProperty` 的组合。

- 父级：[save-system API](./)
- 同级：[SaveableFieldAttribute](../SaveableFieldAttribute/) · [SaveableTypeDefiner](../SaveableTypeDefiner/)
