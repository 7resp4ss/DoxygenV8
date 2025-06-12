var register_allocator_8h =
[
    [ "LifetimePosition", "classv8_1_1internal_1_1compiler_1_1LifetimePosition.html", "classv8_1_1internal_1_1compiler_1_1LifetimePosition" ],
    [ "RegisterAllocationData", "classv8_1_1internal_1_1compiler_1_1RegisterAllocationData.html", "classv8_1_1internal_1_1compiler_1_1RegisterAllocationData" ],
    [ "PhiMapValue", "classv8_1_1internal_1_1compiler_1_1RegisterAllocationData_1_1PhiMapValue.html", "classv8_1_1internal_1_1compiler_1_1RegisterAllocationData_1_1PhiMapValue" ],
    [ "DelayedReference", "structv8_1_1internal_1_1compiler_1_1RegisterAllocationData_1_1DelayedReference.html", "structv8_1_1internal_1_1compiler_1_1RegisterAllocationData_1_1DelayedReference" ],
    [ "UseInterval", "classv8_1_1internal_1_1compiler_1_1UseInterval.html", "classv8_1_1internal_1_1compiler_1_1UseInterval" ],
    [ "UsePosition", "classv8_1_1internal_1_1compiler_1_1UsePosition.html", "classv8_1_1internal_1_1compiler_1_1UsePosition" ],
    [ "Ordering", "structv8_1_1internal_1_1compiler_1_1UsePosition_1_1Ordering.html", "structv8_1_1internal_1_1compiler_1_1UsePosition_1_1Ordering" ],
    [ "DoubleEndedSplitVector", "classv8_1_1internal_1_1compiler_1_1DoubleEndedSplitVector.html", "classv8_1_1internal_1_1compiler_1_1DoubleEndedSplitVector" ],
    [ "LiveRange", "classv8_1_1internal_1_1compiler_1_1LiveRange.html", "classv8_1_1internal_1_1compiler_1_1LiveRange" ],
    [ "LiveRangeOrdering", "structv8_1_1internal_1_1compiler_1_1LiveRangeOrdering.html", "structv8_1_1internal_1_1compiler_1_1LiveRangeOrdering" ],
    [ "LiveRangeBundle", "classv8_1_1internal_1_1compiler_1_1LiveRangeBundle.html", "classv8_1_1internal_1_1compiler_1_1LiveRangeBundle" ],
    [ "TopLevelLiveRange", "classv8_1_1internal_1_1compiler_1_1TopLevelLiveRange.html", "classv8_1_1internal_1_1compiler_1_1TopLevelLiveRange" ],
    [ "PrintableLiveRange", "structv8_1_1internal_1_1compiler_1_1PrintableLiveRange.html", "structv8_1_1internal_1_1compiler_1_1PrintableLiveRange" ],
    [ "SpillRange", "classv8_1_1internal_1_1compiler_1_1SpillRange.html", "classv8_1_1internal_1_1compiler_1_1SpillRange" ],
    [ "ConstraintBuilder", "classv8_1_1internal_1_1compiler_1_1ConstraintBuilder.html", "classv8_1_1internal_1_1compiler_1_1ConstraintBuilder" ],
    [ "LiveRangeBuilder", "classv8_1_1internal_1_1compiler_1_1LiveRangeBuilder.html", "classv8_1_1internal_1_1compiler_1_1LiveRangeBuilder" ],
    [ "BundleBuilder", "classv8_1_1internal_1_1compiler_1_1BundleBuilder.html", "classv8_1_1internal_1_1compiler_1_1BundleBuilder" ],
    [ "RegisterAllocator", "classv8_1_1internal_1_1compiler_1_1RegisterAllocator.html", "classv8_1_1internal_1_1compiler_1_1RegisterAllocator" ],
    [ "LinearScanAllocator", "classv8_1_1internal_1_1compiler_1_1LinearScanAllocator.html", "classv8_1_1internal_1_1compiler_1_1LinearScanAllocator" ],
    [ "OperandAssigner", "classv8_1_1internal_1_1compiler_1_1OperandAssigner.html", "classv8_1_1internal_1_1compiler_1_1OperandAssigner" ],
    [ "ReferenceMapPopulator", "classv8_1_1internal_1_1compiler_1_1ReferenceMapPopulator.html", "classv8_1_1internal_1_1compiler_1_1ReferenceMapPopulator" ],
    [ "LiveRangeConnector", "classv8_1_1internal_1_1compiler_1_1LiveRangeConnector.html", "classv8_1_1internal_1_1compiler_1_1LiveRangeConnector" ],
    [ "RangeRegisterSmallMap", "register-allocator_8h.html#a399811c8c53ac164580f70e38bdcabee", null ],
    [ "UseIntervalVector", "register-allocator_8h.html#a41883fb35e6905a349e2edff63bf2af8", null ],
    [ "UsePositionVector", "register-allocator_8h.html#ae0823c271b79a8e566dc6521cc5a1089", null ],
    [ "GrowthDirection", "register-allocator_8h.html#a4295fbcb67c10e3c11e8096b2a80196d", [
      [ "kFront", "register-allocator_8h.html#a4295fbcb67c10e3c11e8096b2a80196da96efb8639cdf9832b378bbca64f39876", null ],
      [ "kFrontOrBack", "register-allocator_8h.html#a4295fbcb67c10e3c11e8096b2a80196da16c184104cb70148708809c7b531ec32", null ]
    ] ],
    [ "UsePositionHintType", "register-allocator_8h.html#aaf22dd277d797ea2a57d496631f034f6", [
      [ "kNone", "register-allocator_8h.html#aaf22dd277d797ea2a57d496631f034f6a35c3ace1970663a16e5c65baa5941b13", null ],
      [ "kOperand", "register-allocator_8h.html#aaf22dd277d797ea2a57d496631f034f6aeb47da7176f8b65e54de790db431e5a6", null ],
      [ "kUsePos", "register-allocator_8h.html#aaf22dd277d797ea2a57d496631f034f6a490008f4e3279e9344f2c2075bd1287e", null ],
      [ "kPhi", "register-allocator_8h.html#aaf22dd277d797ea2a57d496631f034f6a7d8013544a8fe735b2731dee53244ba9", null ],
      [ "kUnresolved", "register-allocator_8h.html#aaf22dd277d797ea2a57d496631f034f6a8fae96c2c16a6e5bffe0ababb3ede10e", null ]
    ] ],
    [ "UsePositionType", "register-allocator_8h.html#a7b6df401819d405afa63acd8f105c5e2", [
      [ "kRegisterOrSlot", "register-allocator_8h.html#a7b6df401819d405afa63acd8f105c5e2a3a93ed4cbfb40b28ddb0f10c5648f246", null ],
      [ "kRegisterOrSlotOrConstant", "register-allocator_8h.html#a7b6df401819d405afa63acd8f105c5e2a982caa97dcc7823b3ebcf26f31c40a73", null ],
      [ "kRequiresRegister", "register-allocator_8h.html#a7b6df401819d405afa63acd8f105c5e2ab42cb54cb90a9fdf22549474de5e1578", null ],
      [ "kRequiresSlot", "register-allocator_8h.html#a7b6df401819d405afa63acd8f105c5e2a52ab9859ec308dbd0d198cce409b209d", null ]
    ] ],
    [ "operator<<", "register-allocator_8h.html#a135d5776b8f3aa71053e09aff0fac7b9", null ],
    [ "operator<<", "register-allocator_8h.html#a4343c6cb055ec2b4274edfb1ce50f3ec", null ]
];