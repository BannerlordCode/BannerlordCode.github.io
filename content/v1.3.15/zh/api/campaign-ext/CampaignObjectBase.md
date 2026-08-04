---
title: "CampaignObjectBase"
description: "战役实体共享的对象系统基类：把 MBObjectBase 的 ID、注册、初始化和读档生命周期带入 Hero、MobileParty 等对象。"
---
# CampaignObjectBase

**命名空间：** `TaleWorlds.CampaignSystem`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public class CampaignObjectBase : MBObjectBase`  
**基类：** [MBObjectBase](../MBObjectBase)  
**源码：** `TaleWorlds.CampaignSystem/CampaignObjectBase.cs`  
**权威语义：** 1.3.15；1.4.5 的对象生命周期边界相同

## 概述

它把对象系统的身份、注册和存档生命周期作为共同基类提供给战役对象；它不定义“战役行为”，也不是 mod 应直接 `new` 的实体工厂。

对 mod 来说，最重要的不是调用这个基类的方法，而是理解派生对象何时已经进入对象表、何时可以安全读取，以及哪些身份字段由框架拥有。真正的修改入口仍然属于具体实体和对应的 Action/Model。

## 心智模型

`CampaignObjectBase` 是一个很薄的层：源码只把 `MBObjectBase` 继承到 `TaleWorlds.CampaignSystem`，并让自动存档收集链能识别这个类型。真正的业务状态和方法由派生类提供，例如 [Hero](../../campaign/Hero)、[MobileParty](../../campaign/MobileParty)、`Clan`、`Kingdom` 和 `Settlement`。

```text
MBObjectManager / CampaignObjectManager
        │ 注册、按 StringId 查找、分发加载阶段
        ▼
CampaignObjectBase : MBObjectBase
        │ 继承 StringId / Id / IsInitialized / IsReady / GetName
        ▼
Hero、MobileParty、Clan、Kingdom、Settlement 等战役实体
```

因此它位于 ObjectSystem 与 Campaign 实体之间。mod 通常通过 `Campaign.Current`、`Hero.MainHero` 或 [CampaignObjectManager](../CampaignObjectManager) 取得派生对象，然后读取继承的身份/就绪状态；不要把基类当作一个能脱离对象管理器存在的 DTO。

## 何时使用，何时不要用

**适合使用：**

- 编写只关心“战役对象是否已初始化/已就绪、它的 `StringId` 是什么”的通用辅助代码。
- 在需要接受多个战役实体类型时，将参数类型抽象为 `CampaignObjectBase`，再由调用者传入真实派生对象。
- 理解 `CampaignObjectManager`、`MBObjectManager` 和存档系统为何把战役对象当作注册对象处理。

**不要使用：**

- 直接 `new CampaignObjectBase()` 作为 Hero、Party 或 Settlement 的替代。它没有这些对象的组件、行为和保存契约。
- 直接写 `Id`、`IsInitialized` 或 `IsRegistered` 来伪造加载完成。注册和加载阶段由对象管理器控制。
- 把 `MBGUID Id` 当成跨存档业务键。需要持久关联时使用派生对象的稳定 `StringId` 或由存档系统保存的对象引用。
- 在对象尚未 `IsReady` 时访问依赖其他注册对象的派生类属性；应遵守具体派生类的初始化/读档边界。

## 继承契约与依赖

| 方向 | 类型/系统 | 关系 |
|---|---|---|
| 上游注册 | [CampaignObjectManager](../CampaignObjectManager)、`MBObjectManager` | 负责类型列表、`StringId` 查找、注册和加载阶段 |
| 基础契约 | [MBObjectBase](../MBObjectBase) | 提供 `StringId`、`MBGUID Id`、初始化/注册/读档回调 |
| 派生实体 | [Hero](../../campaign/Hero)、[MobileParty](../../campaign/MobileParty) | 在基类之上添加战役身份、位置、队伍和关系状态 |
| 存档注册 | [SaveableCampaignTypeDefiner](../SaveableCampaignTypeDefiner) | 以本类型的稳定类型定义参与战役对象存档收集 |
| 模组宿主 | [CampaignBehaviorBase](../CampaignBehaviorBase) | 在战役事件生命周期中安全读取实体 |
| 业务下游 | [Campaign](../../campaign/Campaign)、各类 `*Action` 和 `*Model` | 消费对象身份并通过业务入口修改世界状态 |

## 生命周期与可见成员

本类没有新增的 public 属性或方法；mod 可见契约来自 `MBObjectBase`：

| 成员 | 用途与时机 | 副作用/边界 |
|---|---|---|
| `StringId` | 逻辑身份；对象管理器和许多 `Find<T>(string)` 路径使用它 | 必须在注册后保持稳定；冲突处理可能改变实际 ID，不能只相信预设字符串 |
| `Id` | 当前会话内的 `MBGUID` | 不是跨加载的持久键，不应自行设置或序列化成外部关联 |
| `IsInitialized` | `Initialize`/反序列化已经完成的缓存状态 | 由框架控制；为 `true` 不代表所有依赖对象都已恢复 |
| `IsReady` | 注册后 `AfterInitialized` 允许对象进入可用阶段的状态 | 读取派生对象前应确认；不要用赋值绕过管理器 |
| `GetName()` | 取得默认 `TextObject` 名称；派生实体可以重写 | `StringId` 可能只是内部 ID，业务对象通常应使用派生类自己的名称属性 |
| `Initialize` / `Deserialize` | 对象创建和 XML 初始化阶段 | 跨对象引用可能尚未加载，不能在早期阶段假设世界完整 |
| `AfterRegister` / `PreAfterLoad` / `AfterLoad` | 注册后和存档加载的阶段回调 | 只能在正确阶段绑定其他对象；乱用会产生 null 或读档顺序问题 |

## 真实示例

### 示例 1：以基类读取当前 Hero 的稳定身份

`Hero.MainHero` 是真实的 Campaign 获取路径；将它视为基类只保留对象系统契约，不会丢失其具体 Hero 实例：

```csharp
using TaleWorlds.CampaignSystem;

CampaignObjectBase currentObject = Hero.MainHero;

if (currentObject != null && currentObject.IsInitialized && currentObject.IsReady)
{
    string stableId = currentObject.StringId;
    // 需要英雄业务状态时，再把对象作为 Hero 使用，而不是只靠基类猜测。
    Hero hero = (Hero)currentObject;
}
```

### 示例 2：通过 CampaignObjectManager 按稳定 ID 查询派生对象

对象管理器的泛型查找返回真实派生类型；基类适合做通用校验，不能替代具体类型：

```csharp
using TaleWorlds.CampaignSystem;

Hero mainHero = Hero.MainHero;
if (Campaign.Current != null && mainHero != null)
{
    Hero sameHero = Campaign.Current.CampaignObjectManager.Find<Hero>(mainHero.StringId);

    if (sameHero != null && sameHero.IsReady)
    {
        string idForLogging = sameHero.StringId;
        // 需要修改关系、金钱等状态时，转到对应 Action，而不是改基类身份字段。
    }
}
```

## 风险与崩溃/坏档边界

- **直接实例化会得到空壳。** `CampaignObjectBase` 没有 `Hero`、`MobileParty` 等业务组件；把它塞给只接受具体派生类的系统会导致无效状态或类型转换错误。
- **注册顺序很重要。** `IsInitialized`、`IsReady`、`IsRegistered` 分别代表不同阶段。对象管理器未注册、未完成 `AfterRegister` 或尚未 `AfterLoad` 时，派生对象的跨引用可能为空。
- **不要修改身份字段。** `StringId` 参与对象查找和存档引用，`Id` 由管理器分配；手动改它可能让对象从类型表中“消失”、产生重复引用或让旧存档无法找到对象。
- **不要跨局缓存实例。** `CampaignObjectManager` 清理或重新加载后，旧对象引用不再属于当前对象表；在事件回调中应重新从 `Campaign.Current` 获取，并检查当前生命周期。
- **存档阶段不能提前解引用。** `CampaignObjectBase` 只保证基础对象收集链存在，不保证所有 Hero、Party、Settlement 已经恢复；依赖其他对象的初始化应放到派生类规定的 `AfterLoad` 或战役事件之后。
- **使用基类不等于可以绕过 Action。** 身份字段就绪只说明对象可以被访问；改变所有权、关系、战争或队伍状态仍应使用对应 `*Action.Apply`，否则事件、缓存和存档可能不一致。

## 跨版本提示

1.3.15 与 1.4.5 都用 `CampaignObjectBase : MBObjectBase` 承载战役对象的对象系统契约。派生类型和模块集合会随版本变化；跨版本 mod 应检查目标版本的具体派生类、`CampaignObjectManager` 查询结果和存档定义，不要假设同一个 `StringId` 在两个版本都存在。

## ↑ 父级导航

- [CampaignSystem API](../)
- [Campaign](../../campaign/Campaign) — 战役实例和生命周期
- [MBObjectBase](../MBObjectBase) — 注册、初始化和加载的基础契约

## ↔ 同级导航

| 页面 | 关系 |
|---|---|
| [CampaignObjectManager](../CampaignObjectManager) | 维护并查询战役对象 |
| [Hero](../../campaign/Hero) | 典型的战役实体派生类 |
| [MobileParty](../../campaign/MobileParty) | 带地图位置和 Party 组件的派生类 |
| [SaveableCampaignTypeDefiner](../SaveableCampaignTypeDefiner) | 战役对象的存档类型定义 |
| [CampaignBehaviorBase](../CampaignBehaviorBase) | 在事件生命周期内取得对象 |

## 参见

- [开发者任务路线图](../../../architecture/developer-roadmap)
- [崩溃与存档边界](../../../architecture/crash-boundaries)
- [对象系统 API](../)
