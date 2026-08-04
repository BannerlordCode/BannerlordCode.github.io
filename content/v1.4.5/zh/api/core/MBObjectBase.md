---
title: "MBObjectBase"
description: "TaleWorlds.ObjectSystem 中所有 MB 对象的根基类：统一承载 StringId / MBGUID 身份、注册与初始化生命周期、反序列化与保存钩子。理解它才能安全地通过 MBObjectManager 获取与管理游戏对象。"
---

# MBObjectBase

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public class MBObjectBase`
**Base:** 无（根基类）
**File:** `bin/TaleWorlds.ObjectSystem/TaleWorlds.ObjectSystem/MBObjectBase.cs`

## 职责一句话

它是游戏里一切“被管理器注册、可以按身份查找并参与存档”的对象的共同根：物品、兵种、英雄、定居点、家族和王国等运行时对象都沿着这条基类契约被创建、分配身份并进入加载流程。对 mod 开发者来说，它最重要的价值不是提供业务规则，而是告诉你一个对象何时已经注册、初始化和可安全交给下游系统使用。

## 心智模型

- **生命周期**：`MBObjectBase` 本身几乎从不直接 `new`。模块 XML（items / characters / spcultures …）在游戏启动时被 `MBObjectManager` 逐条读入并注册；运行期对象（Hero、MobileParty 等）由 `Campaign.Current.CampaignObjectManager` 在战局开始或读档时创建并注册。注册后 `IsRegistered = true`，初始化后 `IsInitialized = true`，`AfterInitialized` 后 `IsReady = true`。
- **谁创建 / 谁持有**：模块级对象由全局单例 `MBObjectManager.Instance` 持有；战局级对象由 `Campaign.Current.CampaignObjectManager` 持有。对象一旦注册，就由对应管理器按类型分桶（TypeRecord）索引。注意 `CampaignObjectManager` **不是** `MBObjectManager` 的子类，它是独立的战局对象管理器。
- **所在层级**：这是对象系统的"数据 / 身份层"，位于模块加载与存档之间。它不负责规则逻辑——那是 Behavior / Model / Campaign 的职责。
- **何时用**：当你持有一个对象的 `StringId` 或引用，想确认身份（`Id`）、显示名（`GetName`）、是否就绪（`IsReady`）时读取它；想按名解析对象时用管理器的 `GetObject<T>(stringId)`。
- **何时不要用 / 正确替代**：不要写 `new ItemObject("xxx")` 之类随手 new 一个 MB 对象——它不会被注册、查不到、也存不进档。新对象要么来自模块 XML 注册，要么由对应管理器（如 `MBObjectManager.RegisterObject<T>`、战局系统）创建。不要在 `Deserialize` / `OnBeforeLoad` / `AfterLoad` 阶段去改已注册对象的 `StringId` 或解除注册。

## 依赖关系

**上游（谁创建 / 管理它）**

- [MBObjectManager](../../campaign-ext/MBObjectManager) —— 模块对象的注册与按名查找（`GetObject<T>(string)`、`GetObjectTypeList<T>()`）
- `MBGUID` —— `Id` 字段的身份结构（TypeId + SubId），跨档引用靠它还原
- SaveSystem / `SaveableProperty` —— 字段持久化（`[SaveableProperty(1/2/3)]`）
- `TaleWorlds.Localization.TextObject` —— `GetName()` 的返回值类型
- `System.Xml.XmlNode` —— `Deserialize` 的传入节点

**下游（它的子类）**

- [ItemObject](../../core-extra/ItemObject) —— 物品（模块级）
- [Game](../../core-extra/Game) —— 顶层游戏对象
- [Hero](../../campaign/Hero) —— 英雄（战局级，由 `CampaignObjectManager` 管理）
- `CharacterObject` —— 兵种（模块级）

**生命周期钩子 / 事件**

- `OnRegistered` → 虚方法 `AfterRegister()`（注册完成后）
- `OnBeforeLoad` → 虚方法 `OnBeforeLoad()`（`[LoadInitializationCallback]`，读档前）
- `PreAfterLoad` / `AfterLoad`（虚，加载后钩子）
- `AfterInitialized` → 置 `IsReady`
- `Deserialize(MBObjectManager, XmlNode)`（虚，从 XML 读入 `StringId`）

**Behaviors / Actions / Models**：不直接依赖。`MBObjectBase` 是数据载体，它们消费其子类（例如物品栏 `ItemRoster` 持有 `ItemObject` 引用、战役逻辑读取 `Hero`）。

**存档（Save）**

- `SaveableProperty(1) = StringId`、`(2) = Id`、`(3) = IsRegistered`
- 保存由 `MBObjectManager` 驱动；对象必须已注册且身份（`Id`）稳定，跨档引用才能正确还原

## 风险

1. **未注册对象**：随手 `new` 出来的 `MBObjectBase` 子类不会被任何管理器的 TypeRecord 收录，`GetObject<T>(id)` 永远返回 `null`，也进不了存档。务必经 `MBObjectManager.RegisterObject<T>` 或模块 XML 注册。
2. **StringId 冲突**：同一类型（同一 TypeRecord）下 `StringId` 必须唯一；重复注册会相互覆盖并触发 `Debug.FailedAssert`。手写模块 XML 的 `id` 时要避免与原生或其它模块撞名。
3. **存档身份漂移**：`Id` 是 `MBGUID`（含 TypeId 与 SubId），跨档引用靠它还原。注册后不要改 `StringId`、不要 `Unregister` 正被其它对象引用的对象，否则读档后引用断链。
4. **加载期突变**：在 `OnBeforeLoad` / `Deserialize` / `AfterLoad` 阶段修改已注册对象的状态，可能破坏加载顺序或导致 `IsInitialized` / `IsReady` 不一致。需要补数据请在 `AfterLoad` 内做，并确认 `IsReady`。
5. **IsRegistered 缓存语义**：`OnRegistered` 会把 `IsRegistered` 置 `true` 并调用虚方法 `AfterRegister`；子类若重写 `AfterRegister` 要注意依赖顺序——此时被引用的对象可能尚未就绪。

## 成员笔记

**身份字段**

- `StringId`（`string`，`[SaveableProperty(1)]`）：模块 XML 里的 `id`，是按名查找的键。注册后应保持稳定，不要在运行期随意改写。
- `Id`（`MBGUID`，`[SaveableProperty(2)]`）：全局唯一身份（TypeId + SubId）。`GetHashCode()` 即以 `Id` 计算，因此可用 `MBGUID` 做相等判断 / 字典键。
- `IsInitialized`（`[CachedData]`，`internal set`）、`IsReady`（`[CachedData]`）、`IsRegistered`（`[CachedData]`，`internal`/`private set`，`[SaveableProperty(3)]`）：生命周期标志，供管理器与加载流程读取，不要在外部直接赋值。

**生命周期方法**

- `Initialize()`（虚）：置 `IsInitialized = true`；通常由 `Deserialize` 调用。
- `Deserialize(MBObjectManager, XmlNode)`（虚）：调用 `Initialize()` 并从节点属性 `"id"` 读入 `StringId`；子类重写以补充自身字段。
- `OnRegistered()`：管理器注册完成后调用，置 `IsRegistered = true` 再调 `AfterRegister()`。
- `OnUnregistered()`：注销时置 `IsRegistered = false`。
- `AfterRegister()`（虚）：注册后钩子，用于在引用就绪后初始化自身关联。
- `AfterInitialized()`：若已注册则置 `IsReady = true`。
- `OnBeforeLoad()` / `PreAfterLoad()` / `AfterLoad()`（虚）：加载生命周期钩子；`BeforeLoad` 由 `[LoadInitializationCallback]` 触发，若已注册会重新以"无初始化"方式登记并置 `IsInitialized`。

**读取**

- `GetName()`（虚）：默认返回 `new TextObject(StringId)`；子类（如 `Hero`）覆盖为本地化显示名。
- `GetHashCode()`：返回 `Id.GetHashCode()`，便于把对象放进以 `MBGUID` 为键的集合。

## 真实示例

通过 `StringId` 解析模块物品对象（真实获取路径，已对照 `MBObjectManager.GetObject<T>(string)` 源码）：

```csharp
// 在模组运行期（例如 SubModule 的 OnGameInitializationFinished，或某个 CampaignBehavior 中）
// 通过全局 MBObjectManager 按 StringId 取出物品对象
ItemObject sword = MBObjectManager.Instance.GetObject<ItemObject>("item_sword_1");

if (sword != null && sword.IsReady)
{
    // 取到的是已注册、已初始化的真实对象，可安全读取其字段
    TextObject displayName = sword.GetName();
    MBGUID identity = sword.Id;
    // 之后可交给 ItemRoster / 装备逻辑等消费
}

// 关键：item_sword_1 必须来自某个已加载模块的 XML（含该 id），
// 否则 GetObject 返回 null。千万不要试图用 new ItemObject("item_sword_1") 代替。
```

## 导航

- ↑ 父级：[核心模块索引](./)
- ↔ 同级：[MBSubModuleBase](../MBSubModuleBase)、[Game](../../core-extra/Game)
- 下游 / 相关：[ItemObject](../../core-extra/ItemObject)、[Hero](../../campaign/Hero)
- 上游枢纽：[MBObjectManager](../../campaign-ext/MBObjectManager)
- 架构：[文档契约](../../../architecture/doc-contract)、[架构首页](../../../architecture/)

## 参见

- 上游枢纽：[MBObjectManager](../../campaign-ext/MBObjectManager) —— 对象的注册与按名查找
- 下游 / 相关：[ItemObject](../../core-extra/ItemObject)、[Hero](../../campaign/Hero)
- 架构约束：[文档契约](../../../architecture/doc-contract)、[架构首页](../../../architecture/)
