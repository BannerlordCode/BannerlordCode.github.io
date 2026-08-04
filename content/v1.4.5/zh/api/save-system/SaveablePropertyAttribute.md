---
title: "SaveablePropertyAttribute"
description: "为已注册存档类型的实例属性分配稳定 LocalSaveId，并由 TypeDefinition 收集属性元数据。"
---

# SaveablePropertyAttribute

**Namespace:** `TaleWorlds.SaveSystem`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `public class SaveablePropertyAttribute : Attribute`  
**Source:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveablePropertyAttribute.cs`

## 一句话职责

`SaveablePropertyAttribute` 是 SaveSystem 的属性成员契约。它只给一个实例 property 携带 `LocalSaveId`；它不会注册属性类型、创建 `DefinitionContext`，也不会因为属性可见就自动把它放进存档。

## 心智模型

把它看成“已注册类型中由 property 暴露的一个存档槽位编号”。实际链路是：

1. [SaveManager](../SaveManager) 创建 [DefinitionContext](../DefinitionContext)。
2. `DefinitionContext` 发现并初始化 [SaveableTypeDefiner](../SaveableTypeDefiner)，注册可进入对象图的类型和容器。
3. 类型定义完成后，[TypeDefinition](../TypeDefinition) 反射收集带有这个 Attribute 的 instance property。
4. 保存或加载对象图时，property definition 和 `LocalSaveId` 参与成员数据的定位。

如果只是要保存 [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) 自己的战役状态，优先使用 `SyncData(IDataStore)`。不要把 Behavior 的 key/value 数据和 SaveSystem 的 property schema 混为一条路径。

## 源码契约

源码定义为：

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

实际含义如下：

- `AttributeTargets.Property` 只允许把它写在属性上；字段必须使用 [SaveableFieldAttribute](../SaveableFieldAttribute)。
- `AllowMultiple` 和 `Inherited` 没有显式设置，因此默认是 `AllowMultiple = false`、`Inherited = true`。这不等于派生类型的同名 property 会自动获得一个安全的新存档 ID；引擎仍依据 property 的 `DeclaringType` 建立成员身份。
- Attribute 没有无参构造函数。`[SaveableProperty(3)]` 调用带 `short` 参数的构造函数。
- `LocalSaveId` 有 public setter，构造函数不验证范围和重复。引擎收集时读取当前值；发布后的 ID 应稳定、非负、不可复用，不要在运行时改写。

## 真实源码示例

`TaleWorlds.Core.Game` 保存其游戏类型 property：

```csharp
public sealed class Game : IGameStateManagerOwner
{
    [SaveableProperty(3)]
    public GameType GameType { get; private set; }
}
```

`3` 是 property 的本地成员 ID，`GameType` 是属性类型，private setter 仍是源码声明的一部分。这个 property 能被收集，是因为 `Game` 的类型/root 定义和 `GameType` 的类型定义分别由 core 的保存定义提供，不是因为 Attribute 自动注册了它们。

同一个 `Game` 还包含 field 成员：

```csharp
[SaveableField(11)]
private int _nextUniqueTroopSeed = 1;
```

field 与 property 是两个明确的 Attribute 目标。`Game` 的 `[SaveableRootClass(5000)]`、`SaveableCoreTypeDefiner` 的 root registration、`3` 和 `11` 各自属于不同层次，不能互相替代。

## 属性必须满足的边界

`SaveablePropertyAttribute` 只标记 property，不等于运行时 setter 一定可供 mod 调用。源码收集阶段使用 reflection 取得 `PropertyInfo` 和属性 Attribute；`PropertyDefinition` 随后要求 getter 和 setter 都存在，setter 可以是 private 或 internal，加载时会直接调用它。缺少任一访问器会触发断言或异常，而不是被安全地当作只读属性跳过。推荐使用引擎真实采用的可读属性，并明确其 setter、初始化和加载后不变量。

不要把计算属性当作持久化字段：如果 getter 每次根据 `Campaign.Current`、UI 或临时缓存计算，恢复时可能没有同样的上下文。应保存稳定的源状态，并在合适的加载回调后重新计算派生值。

## 何时被收集

`DefinitionContext.FillWithCurrentTypes()` 先收集可保存程序集并运行所有 `SaveableTypeDefiner` 的类型定义 hook：basic、class、struct、interface、enum、root、generic、container，最后是 conflict resolver。定义完成后，它对 root class、class 和 struct 的 `TypeDefinition` 收集成员。

对 root/class，源码先调用 `CollectInitializationCallbacks()`，再 `CollectProperties()`，再 `CollectFields()`。`CollectProperties()` 的关键步骤是：

- 使用 `BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic` 取得当前类型可见的 instance properties。
- 对每个 property 读取 `SaveablePropertyAttribute`，取第一个 Attribute 的 `LocalSaveId`。
- 用 property 的 `DeclaringType` 计算 class level，构造 `MemberTypeId`，再创建 `PropertyDefinition`。
- 若该 property ID 没有冲突，就加入 `_properties` 和 `MemberDefinitions`；冲突则写入 `TypeDefinition.Errors`。

因此，Attribute 写在源码中并不等于立即序列化；只有已注册的 `TypeDefinition` 经过 collection，属性才成为 SaveSystem 元数据。

## MemberTypeId、继承与重复 ID

属性的完整成员身份是 class level 加 local ID，而不是单独的 `LocalSaveId`：

```csharp
MemberTypeId memberTypeId = new MemberTypeId(classLevel, saveablePropertyAttribute.LocalSaveId);
```

`MemberTypeId.SaveId` 按 `(TypeLevel << 8) + LocalSaveId` 计算。要特别注意：

- 基类和派生类声明的 property 可能有不同 `TypeLevel`，所以相同本地数字不代表同一个槽位。
- 移动 property、改变继承结构或让 property 由另一类型声明，可能改变 class level，造成 schema 变化。
- `CollectProperties()` 使用 `_properties` 字典按 `MemberTypeId` 去重。同一声明层级出现重复 property ID 时会记录错误，而不是安全覆盖。
- field 和 property 的内部字典分开；这说明重复检查是按成员类别发生的，不代表可以随意在同一类型里复用数字。为长期 schema 维护一张清晰的编号表。

`DefinitionContext` 会汇总这些错误。`SaveManager.Save` 在定义上下文有错误时返回失败结果，不会继续生成可信存档。

## 类型依赖与 `SyncData` 边界

属性 Attribute 只提供成员身份。属性类型若是自定义 class、struct、enum、封闭泛型或 container，仍必须由 [SaveableTypeDefiner](../SaveableTypeDefiner) 通过 [DefinitionContext](../DefinitionContext) 定义；[SaveManager.CheckSaveableTypes](../SaveManager) 可帮助找出带属性 Attribute 但缺少类型定义的声明。

战役 Behavior 的持久化是另一条路：`CampaignBehaviorManager` 给每个 [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) 建立 [IDataStore](../../campaign/IDataStore) 记录，`SyncData(IDataStore)` 用稳定字符串 key 同步值。这个适配层并不与 SaveSystem 完全断开，内部 `CampaignBehaviorDataStore.BehaviorSaveData` 自身带有 Saveable field，最终随对象图保存。Behavior 自己拥有的属性不需要同时使用 `[SaveableProperty]`。只有当 property 属于已经进入 SaveSystem 对象图的类型，且你确实要保存这个成员，才采用本 Attribute。

## 兼容性与风险

- **保持已发布 ID。** 改 `3` 为 `4`、复用退役编号、改变 property 类型或移动其声明位置，都会改变旧档的 schema。应保留旧编号，并为迁移或旧版本映射设计明确策略。
- **不要把 property 名称当作兼容键。** SaveSystem 使用 `MemberTypeId` 定位成员；改名不会自动保留旧 ID，继承结构变化也可能改变 level 部分。
- **不要忽略重复 ID。** 同一类型层级的重复 property ID 会变成 context error，最终阻止 `SaveManager.Save` 进行可信序列化。
- **不要保存动态运行时引用。** Mission、Agent、UI、委托和引擎对象的生命周期可能短于战役存档；应保存稳定标识或标量，并在加载完成后重新获取对象。
- **不要用它替代 Behavior 存档。** 需要保存 Behavior 自己的简单状态时，应使用 `SyncData` 的稳定 key；不要在 `OnBeforeSave` 中自行创建定义上下文或绕过游戏的保存顺序。

## 导航

- 上级：[存档系统目录](../)
- 同级：[SaveableFieldAttribute](../SaveableFieldAttribute) · [SaveableRootClassAttribute](../SaveableRootClassAttribute) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [SaveManager](../SaveManager)
- 相关：[DefinitionContext](../DefinitionContext) · [TypeDefinition](../TypeDefinition) · [PropertyDefinition](../PropertyDefinition) · [MemberTypeId](../MemberTypeId) · [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) · [Game](../../core/Game)
