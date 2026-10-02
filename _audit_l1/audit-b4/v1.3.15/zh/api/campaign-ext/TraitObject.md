---
title: "TraitObject"
description: "角色特性（如仁慈、荣誉、狡诈）的定义对象：声明名称、描述、隐藏标记与取值区间，由 Hero/CharacterObject 持有实际的特性等级。"
---
# TraitObject

**Namespace:** `TaleWorlds.CampaignSystem.CharacterDevelopment`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public sealed class TraitObject : PropertyObject`  
**Base:** `PropertyObject`（继承自 `MBObjectBase`）  
**Source:** `TaleWorlds.CampaignSystem/CharacterDevelopment/TraitObject.cs`

## 一句话职责

它定义“一种特性是什么”——名字、描述、是否在 UI 隐藏、以及某角色在该特性上的等级允许落在哪个 `[MinValue, MaxValue]` 区间；它**本身不保存任何英雄的实际等级**，真正的等级由 `Hero` / `CharacterObject` 按特性持有。

## 心智模型

把 `TraitObject` 理解为**“特性类型”**，而不是“某个角色的特性值”。它和 `Hero` 的关系，类似 `SkillObject` 与“技能等级”的关系：前者是定义，后者是实例状态。

- `TraitObject` 是一个 `MBObjectBase`（经由 `PropertyObject`），因此它住在 `MBObjectManager` 里，用 `stringId` 寻址（如 `"Mercy"`、`"Honor"`、`"curt"`）。
- 全部内置特性在战役启动时由 `DefaultTraits.RegisterAll()` 一次性注册：先 `Game.Current.ObjectManager.RegisterPresumedObject(new TraitObject(stringId))`，再调用 `Initialize(name, description, isHidden, minValue, maxValue)`。模组几乎从不需要自己 `new` 一个。
- 真正的“这个英雄有多仁慈”保存在 `Hero._heroTraits`（`PropertyOwner<TraitObject>`）里；普通部队（非英雄 `CharacterObject`）则保存在 `CharacterObject._characterTraits`。读写都走 `Hero.GetTraitLevel(trait)` / `Hero.SetTraitLevel(trait, value)`，模板侧走 `CharacterObject.GetTraitLevel(trait)`。
- 特性等级来自**经验值**：玩法事件（战斗、劫掠村庄、释放领主、完成任务等）通过 `TraitLevelingHelper` 累加特性经验，`CharacterDevelopmentModel` 把经验换算成等级后调用 `Hero.SetTraitLevel`，并在玩家特性变化时派发 `OnPlayerTraitChanged`。
- 层级：Campaign / Character Development。它不是 Mission 对象，也不能单独存档——只有“每个英雄的特性等级”会被持久化（见下方存档段）。

## 何时用 / 何时不要用

- **用**：要判断或改变某角色在“仁慈 / 荣誉 / 狡诈”等轴上的倾向时，先拿到 `TraitObject`（如 `DefaultTraits.Mercy`），再用 `Hero.GetTraitLevel` / `Hero.SetTraitLevel`。
- **用**：需要枚举全部特性时，遍历 `TraitObject.All`。
- **不要用**：不要为了“给游戏加一种新特性”而直接 `new TraitObject(...)`。游戏内特性由 `DefaultTraits` 在战役启动时统一注册；若模组要新增特性，必须也通过 `MBObjectManager.RegisterPresumedObject` 注册并 `Initialize`，否则它不会被 `TraitObject.All`、存档与特性升级流程识别。
- **不要用**：不要把“某英雄的特性等级”误以为存在 `TraitObject` 上。`TraitObject` 只有定义，没有等级；等级在 `Hero` / `CharacterObject` 上。
- **不要用**：若想让特性随剧情/行为“自然成长”，优先让 `TraitLevelingHelper` / `CharacterDevelopmentModel` 走经验升级并自动 `SetTraitLevel`，而不是硬编码 `SetTraitLevel`——直接写等级会跳过经验与事件（见风险段）。

## 依赖图

- 上游：[MBObjectManager](../MBObjectManager/) 注册并持有所有 `TraitObject` 实例；`DefaultTraits` 在 `Campaign.Current.DefaultTraits` 首次访问时注册全部内置特性。
- 持有等级：[Hero](../../campaign/Hero/)（`_heroTraits`）与 [CharacterObject](../../campaign/CharacterObject/)（`_characterTraits`、`GetPersona`）按特性存等级。
- 升级流程：[TraitLevelingHelper](../TraitLevelingHelper/) 在玩法事件中累加特性经验，`CharacterDevelopmentModel` 把经验换算成等级并调用 `Hero.SetTraitLevel`；等级变化触发 `CampaignEventDispatcher.OnPlayerTraitChanged`。
- 效果下游：特性等级通过 Native 角色发展数据（技能 / 属性上的 `<effect>` 声明）经 `CharacterDevelopmentModel` 与 [SkillEffect](../SkillEffect/) 影响有效技能 / 属性值；技能等级又决定可解锁的 [PerkObject](../PerkObject/)（特性轴与技能/特长的链路见 [SkillObject](../../core-extra/SkillObject/)）。
- 存档点：`CharacterData` 在存档时枚举 `TraitObject.All`、按 `StringId` 写入每个等级；读档时从 `MBObjectManager` 反查 `TraitObject` 并 `SetTraitLevel`（见 [存档系统](../../../architecture/save-system/)）。

## 风险段

1. **直接改等级绕过成长流程**：手动 `Hero.SetTraitLevel` 不会更新特性经验（`PlayerTraitDeveloper`），也不会派发 `OnPlayerTraitChanged` 或写日志。如果同一特性还有经验流，下一次 `TraitLevelingHelper.AddTraitXp` 可能用经验重新覆盖你写死的等级，造成“设了又变回去”。剧情性设值可用 `SetTraitLevel`，但要清楚它和经验系统不一致。
2. **引用未注册的特性**：用 `MBObjectManager.Instance.GetObject<TraitObject>("X")` 或 `DefaultTraits` 拿特性前，必须保证战役已启动、`DefaultTraits` 已注册。读档阶段若某特性未注册（模组卸载 / 改名），`CharacterData` 反查得到 `null`，该等级被**静默丢弃**——不会崩，但数据丢失。
3. **取值区间被悄悄夹取**：每个特性有自己的 `[MinValue, MaxValue]`。`Hero.SetTraitLevel` 内部用 `MBMath.ClampInt` 把值夹到区间内；传入越界值不会报错，只是被收敛。读档时同样按 `MinValue`/`MaxValue` 夹取。
4. **隐藏特性的含义**：`IsHidden` 只控制 UI 是否展示（如 `Frequency`、`Surgeon`、`Commander` 这类 0–20 的隐藏轴），不影响任何逻辑。不要把 `IsHidden` 当作“不可变”。
5. **存档兼容**：特性等级按 `StringId` 持久化。若你改了某个特性的 `stringId` 或新增特性，旧存档读入时旧 id 找不到对应 `TraitObject`，旧值丢失；新特性在旧存档里默认为 0。跨版本调大某个特性的 `MaxValue` 也会在读档时被旧区间重新夹取。
6. **null 防护**：`Hero.GetTraitLevel` 在 `_heroTraits == null` 时返回 `0`（不崩）；但遍历 `TraitObject.All` 必须在 `Campaign.Current` 可用之后进行。

## 成员说明

### 定义与范围（属性）

#### `public static MBReadOnlyList<TraitObject> All { get; }`
全部已注册特性的只读列表，底层是 `Campaign.Current.AllTraits`。**何时调用**：枚举 / 遍历所有特性（如存档、批量重置、调试打印）。

#### `public int MinValue { get; private set; }`
该特性等级的**下限**。`Initialize` 时写入，只有游戏内注册流程能改。

#### `public int MaxValue { get; private set; }`
该特性等级的**上限**。

#### `public bool IsHidden { get; private set; }`
是否在 UI 隐藏（隐藏轴如 `Frequency = 0..20`）。

#### 继承自 `PropertyObject` 的标识
- `Name`（`TextObject`）：本地化名称。
- `Description`（`TextObject`）：本地化描述。
- `StringId`（`string`）：特性 id；同时是存档与 `MBObjectManager` 反查键（如 `"Mercy"`、`"Honor"`、`"curt"`）。

### 初始化

#### `public TraitObject(string stringId) : base(stringId)`
用 `stringId` 构造一个**未初始化**的特性定义。游戏内由 `DefaultTraits.RegisterAll` 通过 `RegisterPresumedObject` 调用；模组一般不应直接 `new`。

#### `public void Initialize(TextObject name, TextObject description, bool isHidden, int minValue, int maxValue)`
注册后填充名称、描述、隐藏标记与取值区间，并触发 `AfterInitialized()`。**何时调用**：只能在对象被 `MBObjectManager` 注册后调用一次；调用后 `MinValue` / `MaxValue` / `IsHidden` 即固定。

> 注意：`GetTraitLevel` / `SetTraitLevel` **不在** `TraitObject` 上——它们是 `Hero` / `CharacterObject` 的方法。`TraitObject` 只是“类型”；读 / 写某英雄的等级请看 [Hero](../../campaign/Hero/) 的 `GetTraitLevel` / `SetTraitLevel` 与 [CharacterObject](../../campaign/CharacterObject/) 的 `GetTraitLevel` / `GetPersona`。

## 最小真实示例

### 示例 1：读取主角某特性等级并判断倾向

```csharp
using TaleWorlds.CampaignSystem.CharacterDevelopment;

// 拿“仁慈”这个特性定义
TraitObject mercy = DefaultTraits.Mercy;

// 读主角在该特性上的实际等级（范围 -2..2）
int mercyLevel = Hero.MainHero.GetTraitLevel(mercy);
if (mercyLevel > 0)
{
    // 主角是正向“仁慈”
}
```

### 示例 2：给当前对话的领主设定“荣誉”等级（剧情性设值）

```csharp
using TaleWorlds.CampaignSystem.CharacterDevelopment;

Hero target = Hero.OneToOneConversationHero;
if (target != null && target.IsLord)
{
    TraitObject honor = DefaultTraits.Honor;
    // 写入会被夹到 [honor.MinValue, honor.MaxValue] = [-2, 2]
    target.SetTraitLevel(honor, 1);
}
```

## 跨版本提示

- `TraitObject` 类本身在 1.3.0、1.3.15、1.4.5 中完全一致：`All` / `MinValue` / `MaxValue` / `IsHidden` / 构造函数 / `Initialize` 签名与语义均无变化。
- 内置特性的集合与取值区间由 `DefaultTraits` 决定，跨版本大体稳定；新增 / 调整特性属于 Native 模块内容，模组若要兼容旧存档需留意上面“存档兼容”风险。
- 特性等级对技能 / 属性的加成来自 Native 角色发展数据，由 `CharacterDevelopmentModel` 在解析有效技能值时应用；这条解析链路在各版本间保持一致。

## 导航

- [↑ 父级（campaign-ext 模块）](../)
- [↔ 同级](../TraitEffect/) · [↔ TraitLevelingHelper](../TraitLevelingHelper/) · [↔ PerkObject](../PerkObject/) · [↔ SkillEffect](../SkillEffect/) · [↔ TraitChangedMapNotification](../TraitChangedMapNotification/)
- 相关类：[CharacterObject](../../campaign/CharacterObject/) · [Hero](../../campaign/Hero/) · [PerkObject](../PerkObject/) · [SkillObject](../../core-extra/SkillObject/)
- [架构：存档系统](../../../architecture/save-system/) · [架构：崩溃与存档边界](../../../architecture/crash-boundaries/)

> 英文页（EN）待后续同步，与本文同一理解。
