---
title: "AudioProperty"
description: "UI 音效的最小数据单元：AudioName / Delay / DelaySeconds 三个自动属性加一个无判空的 FillFrom；由 BrushFactory 从 XML 的 StateSounds/EventSounds 解析生成，但 BrushListPanel 播放时只读 AudioName，Delay 与 DelaySeconds 在 1.3.0 里没有任何消费点。"
---

# AudioProperty

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class AudioProperty`
**Base:** 无（隐式 `System.Object`；不实现任何接口）
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/AudioProperty.cs`（全文 34 行）

## 概述

`AudioProperty` 是「一个 UI 事件/状态该响哪个音效」的三字段数据袋。整个文件只有三样东西：三个带 `[Editor(false)]` 的自动属性、一个把三个字段逐一复制的 `FillFrom`、以及默认的无参构造函数（编译器生成，源码里没写）。

- `AudioName`（`AudioProperty.cs:12`）——音效资源名，`string`。
- `Delay`（`:18`）——`bool`，语义是「要不要延迟播放」。
- `DelaySeconds`（`:24`）——`float`，语义是「延迟多少秒」。

`FillFrom`（`:27`）是全文唯一的方法体，三行：

```csharp
public void FillFrom(AudioProperty audioProperty)
{
    this.AudioName = audioProperty.AudioName;
    this.Delay = audioProperty.Delay;
    this.DelaySeconds = audioProperty.DelaySeconds;
}
```

**没有 null 检查。** 传 null 进去第一行就 `NullReferenceException`。这跟同桶里 [BrushLayerState](../BrushLayerState) / [Brush](../Brush) 那套 `FillFrom` 一样是「深拷贝」约定：调用方必须保证源非空。

**这个类本身不播放任何声音。** 它纯粹是数据；播放发生在持有它的容器里。1.3.0 源码树里唯一的两处持有者是 [SoundProperties](../SoundProperties) 的 `_stateSounds` / `_eventSounds` 两个字典（用 `AddStateSound` / `AddEventSound` 装进去），而真正调用 `TwoDimensionContext.PlaySound(...)` 的是 [BrushListPanel](../BrushListPanel) 的 `SetState`（`BrushListPanel.cs:157` 附近）与 `BrushWidget_EventFire`（`BrushListPanel.cs:100` 附近）。

## 心智模型

把它看成 **[SoundProperties](../SoundProperties) 字典里的 value**。整条链路是四段：

**第一段，解析。** [BrushFactory](../BrushFactory) 的私有方法 `LoadSoundPropertiesInto(XmlNode, SoundProperties)`（`BrushFactory.cs:421`）在两个子节点上分别遍历：`StateSounds` 里读 `StateName` 与 `Audio` 两个 XML 属性，`EventSounds` 里读 `EventName` 与 `Audio`，然后：

```csharp
AudioProperty audioProperty = new AudioProperty();
audioProperty.AudioName = value2;
soundProperties.AddStateSound(value, audioProperty);
```

**关键事实：解析器只设置 `AudioName`，从不设置 `Delay` / `DelaySeconds`。** 所以从 XML 加载出来的每一个 `AudioProperty`，`Delay` 恒为 `false`、`DelaySeconds` 恒为 `0f`。这两个字段只能靠代码或更上层的手工赋值。

**第二段，存放。** [SoundProperties](../SoundProperties) 提供 `AddStateSound(string, AudioProperty)`、`AddEventSound(string, AudioProperty)`、`GetStateAudioProperty(string)`、`GetEventAudioProperty(string)` 四个 public 方法（`SoundProperties.cs:49`/`:55`/`:89`/`:99`），内部是两个 `Dictionary<string, AudioProperty>`。`Brush` 持有一个 `SoundProperties` 实例（`Brush.cs:116`），构造时 `new SoundProperties()`，`FillFrom` 时会**新建一个实例再 `FillFrom` 过去**（`Brush.cs:522`-`:523`）。

**第三段，查询。** `BrushListPanel.SetState` 拿状态名去问 `SoundProperties.GetStateAudioProperty(stateName)`，拿到后判两层：先判返回对象非 null，再判 `AudioName != null && AudioName != ""`，然后 `base.EventManager.Context.TwoDimensionContext.PlaySound(audioProperty.AudioName)`。注意它判了 `audioProperty != null` 之后，在 `AudioName` 为空串时走的是 `Debug.FailedAssert`（`BrushListPanel.cs:157` 附近的断言文本是「Widget with id ... has a sound having no audioName for event ...」），**只有 `GetEventAudioProperty` 那条路径（`BrushWidget_EventFire`）是纯静默跳过**。

**第四段，延迟从不被用。** 这两个字段在 1.3.0 的全部源码树里找不到任何读取点（除了 `FillFrom` 自身）。所以「给 `Delay` 赋 true 就该延迟响」在 1.3.0 上**不成立**——这是一个只声明未接线的字段对，见风险一节。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `AudioName` | `[Editor(false)] public string AudioName { get; set; }`（`:12`） | 唯一真正被消费的字段。`PlaySound` 的入参就是它。两个判定点：`BrushListPanel.SetState`（非 null 且非空串才播，空串触发断言）与 `BrushWidget_EventFire`（同样的判定，但空串静默跳过）。 |
| `Delay` | `[Editor(false)] public bool Delay { get; set; }`（`:18`） | 声明意图「延迟播放」。**1.3.0 全树无读取点**，只会经 `FillFrom` 被复制。默认 `false`。 |
| `DelaySeconds` | `[Editor(false)] public float DelaySeconds { get; set; }`（`:24`） | 声明意图「延迟秒数」。同样**无读取点**。默认 `0f`。 |
| `FillFrom` | `public void FillFrom(AudioProperty audioProperty)`（`:27`） | 深拷贝三个字段。**参数不做 null 检查**——传 null 立刻 `NullReferenceException`。唯一调用点是 [SoundProperties](../SoundProperties) 的 `FillFrom`（`SoundProperties.cs:66` 与 `:78`），而后者又被 [Brush](../Brush) 的 `FillFrom` 调用（`Brush.cs:523`）。 |

## 真实示例

给一个自定义 Brush 挂上「状态切换音」和「事件音」。注意 `SoundProperties` 的两个 `Add*` 方法都往字典里写，而 [BrushListPanel](../BrushListPanel) 读的是**当前 Brush 克隆体**上的那份，所以写入要发生在克隆之前（`BrushListPanel.Brush` 的 getter 会 `Clone()` 并缓存，见该页）。

```csharp
private static Brush BuildBrushWithSounds(UIContext context, string sourceBrushName)
{
    Brush brush = context.GetBrush(sourceBrushName).Clone();

    AudioProperty onHover = new AudioProperty();
    onHover.AudioName = "checkbox";
    brush.SoundProperties.AddEventSound("MouseEnter", onHover);

    AudioProperty onSelected = new AudioProperty();
    onSelected.AudioName = "click";
    brush.SoundProperties.AddStateSound("Selected", onSelected);

    return brush;
}
```

把一份已有的音效配置整体搬过去（`FillFrom` 无判空，源必须非空）：

```csharp
private static void CopyAudioSettings(Brush target, Brush source)
{
    foreach (KeyValuePair<string, AudioProperty> pair in source.SoundProperties.RegisteredEventSounds)
    {
        AudioProperty copy = new AudioProperty();
        copy.FillFrom(pair.Value);
        target.SoundProperties.AddEventSound(pair.Key, copy);
    }
}
```

`RegisteredEventSounds` 与 `RegisteredStateSounds` 都是 [SoundProperties](../SoundProperties) 上的 `IEnumerable<KeyValuePair<string, AudioProperty>>` 只读属性（`SoundProperties.cs:11` 与 `:27`）。

## 风险与边界

- **`Delay` / `DelaySeconds` 在 1.3.0 是死字段。** 全源码树里除了 `FillFrom` 的一次复制之外，没有任何代码读它们。给它们赋值不产生任何可观察行为。「按下按钮先静默 0.2 秒再响」这种效果在 1.3.0 上做不到——真要做只能在 [BrushListPanel](../BrushListPanel) 的派生类里覆盖 `SetState` 自己加计时。
- **`FillFrom` 不判空。** 这是本类唯一的方法，也是最容易踩的一个：写 `copy.FillFrom(maybeNull)` 会在运行时炸，而 [BrushLayerState](../BrushLayerState) 那种带 `FailedAssert` 的失败模式在这里不存在——是硬崩。
- **`AddStateSound` / `AddEventSound` 会重复抛异常。** [SoundProperties](../SoundProperties) 内部是 `Dictionary.Add`（不是索引器赋值），同一个 key 注册两次会 `ArgumentException`。想覆盖已有音效必须先确认 key 不存在，或者复用已有对象。
- **XML 解析路径只填 `AudioName`。** 如果你在 prefab 的 Brush 里写了延迟播放相关的配置，加载后那两项会被静默归零——不是「读错了」，是**解析器根本没读那个属性**。
- **三个属性都带 `[Editor(false)]`。** 这意味着 Brush XML 的属性系统不会把它们当成可生成绑定项暴露出来。想改只能走代码或 prefab 数据绑定。
- **`AudioName` 判空的两条路径行为不同。** `BrushListPanel.SetState` 遇到空 `AudioName` 会 `Debug.FailedAssert`（开发版弹断言），而 `BrushWidget_EventFire` 遇到空串只是跳过。前者会让开发构建卡住，后者不会。断言文本形如 `Widget with id "<id>" has a sound having no audioName for event "<state>"!`。
- **播放走 `TwoDimensionContext.PlaySound(string)`，没有任何延迟/音量参数。** 音效的音量、混音组都不在这个类里控制——那是 `TaleWorlds.Library` 的音频子系统的事。

## 跨版本提示

五棵源码树（`1.3.0` / `1.3.15` / `1.4.6` / `1.4.7` / `1.5.3`）的 public 签名集合比对：5 条签名（3 个属性 + 1 个方法 + 类声明）在 `1.3.15` / `1.4.6` / `1.4.7` 上与 1.3.0 **完全一致**，1.5.3 同样是 +0/-0。字节哈希 `57ccfc68` → `6eeeaf43` → `ce9a3e8d` → `fca259be`，每棵树都不同，说明方法体/属性特性层面有改动，但公开形状从未变化。

结论：**跨 1.3→1.5 升级不需要为这个类改代码**。但因为 `Delay` / `DelaySeconds` 是死字段，跨版本时值得重新确认一下它们是否在某个中间版本被接上了——签名比对只能证明「字段还在」，证明不了「有没有人用」。

## 依赖关系

- 数据来源：[BrushFactory](../BrushFactory) 的 `LoadSoundPropertiesInto` 从 `<StateSounds StateName=".." Audio=".."/>` 与 `<EventSounds EventName=".." Audio=".."/>` 解析
- 容器：[SoundProperties](../SoundProperties) 的 `AddStateSound` / `AddEventSound` / `GetStateAudioProperty` / `GetEventAudioProperty`，以及只读枚举 `RegisteredStateSounds` / `RegisteredEventSounds`
- 宿主：[Brush](../Brush) 的 `SoundProperties` 属性；Brush 被克隆时该属性会连同字典一起重建成新实例
- 播放方：[BrushListPanel](../BrushListPanel) 的 `SetState`（状态音）与 `BrushWidget_EventFire`（事件音），两者最终都调 `TwoDimensionContext.PlaySound`
- 桶首页：[gui API 分区](../)